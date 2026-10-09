# CI-003: npm Dependency Installation Failure — RCA

## Incident Summary

A simulated CI/CD pipeline failed during the dependency installation stage because the project referenced an unavailable Express package version.

**Incident ID:** CI-003
**Environment:** GitHub Actions / Node.js
**Affected Component:** npm dependency installation
**Severity:** Simulated CI build failure
**Status:** Resolved

## Issue Description

The GitHub Actions workflow failed while executing `npm install`, preventing subsequent JavaScript syntax validation and automated tests from running.

## Error Observed

```text
npm error code ETARGET
npm error notarget No matching version found for express@9999.0.0.
Error: Process completed with exit code 1.
```

## Root Cause

The `package.json` file referenced `express@9999.0.0`, an unavailable package version. npm could not resolve the dependency and terminated the installation process.

## Troubleshooting Steps

1. Opened the failed GitHub Actions workflow.
2. Identified the failure in the **Install dependencies** stage.
3. Reviewed the npm error logs and identified error code `ETARGET`.
4. Inspected `package.json` on the `lab/ci-dependency-failure` branch.
5. Corrected the invalid Express dependency version.
6. Committed the fix and triggered a new CI run.
7. Verified that the pull request's automated checks passed.

## Resolution

Replaced the invalid Express dependency version with a valid version constraint.

```json
"express": "^4.21.2"
```

## Validation

* GitHub Actions reported **All checks have passed**.
* One successful check was recorded on the pull request.
* No merge conflicts were reported.

## Preventive Actions

* Validate dependency versions before committing.
* Review npm installation failures and error codes.
* Maintain automated CI checks for pull requests.
* Use dependency lockfiles for reproducible installations.
* Review dependency updates regularly.

## Learning Outcome

Demonstrated CI/CD incident investigation, npm dependency troubleshooting, root cause analysis, remediation, and automated pipeline recovery.

**Disclaimer:** This is a simulated troubleshooting exercise using synthetic project data. No production systems were affected.
