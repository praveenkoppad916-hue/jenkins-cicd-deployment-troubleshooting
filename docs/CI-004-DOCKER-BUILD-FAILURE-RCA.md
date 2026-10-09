# CI-004: Docker Base Image Resolution Failure — RCA

## Incident Summary

A simulated CI/CD pipeline failed during Docker image creation because the Dockerfile referenced a nonexistent Node.js base image.

* **Incident ID:** CI-004
* **Environment:** GitHub Actions / Docker
* **Affected Component:** Docker image build
* **Severity:** Simulated CI build failure
* **Status:** Resolved

## Issue Description

The Docker Build Validation workflow failed while executing the `docker build` command. The failure occurred before application packaging because Docker could not resolve the configured base image.

## Error Observed

```text
ERROR: docker.io/library/node:9999-nonexistent: not found
Dockerfile:1
FROM node:9999-nonexistent
Error: Process completed with exit code 1.
```

## Root Cause

The Dockerfile referenced `node:9999-nonexistent`, which is not a valid published Node.js Docker image tag.

Docker was unable to retrieve the base image metadata, preventing the build from proceeding.

## Investigation Steps

1. Opened the failed Docker Build Validation workflow in GitHub Actions.
2. Reviewed the failed Build Docker Image job.
3. Identified the image resolution error in the build logs.
4. Traced the error to line 1 of the Dockerfile.
5. Corrected the invalid base image reference.
6. Committed the fix to the feature branch.
7. Verified successful execution of the Docker Build Validation workflow.

## Resolution

Updated the Dockerfile base image:

**Before**

```dockerfile
FROM node:9999-nonexistent
```

**After**

```dockerfile
FROM node:22-alpine
```

## Validation

* Initial workflow: Passed
* Simulated failure workflow: Failed as expected
* Recovery workflow: Passed
* Recovery workflow duration: 18 seconds

## Preventive Actions

* Use supported, published Docker base image tags.
* Validate Docker image builds in CI before merging changes.
* Review Docker build logs for image resolution and registry errors.
* Consider pinning base images by digest for reproducible production builds.

## Lessons Learned

A Docker image build may fail before application code executes. Reviewing the earliest failing build stage helps distinguish base image and registry problems from application-level defects.

**Note:** This is a synthetic troubleshooting exercise. No production systems were affected.
