# CI-001 — CI Pipeline Failure Investigation and Recovery

**Incident Type:** Simulated CI validation failure
**Environment:** GitHub Actions / Node.js
**Repository:** jenkins-cicd-deployment-troubleshooting
**Pull Request:** #1
**Status:** Resolved — Validation Passed
**Production Impact:** None

## 1. Incident Summary

A deliberately introduced failing test caused the Node.js Validation workflow to fail during a pull request. The exercise simulated a deployment health-check failure to practice CI troubleshooting, log analysis, root cause identification, corrective action, and recovery verification.

## 2. Detection

The GitHub Actions workflow reported one failing check in the **Run automated tests** step.

The test output included:

```text
not ok 1 - CI-001: deployment health check

AssertionError: Deployment health check failed:
service is unhealthy

expected: 'HEALTHY'
actual: 'UNHEALTHY'

code: 'ERR_ASSERTION'
```

## 3. Root Cause Analysis

**Immediate cause:** The test asserted that two different hardcoded status values were equal.

* Expected: `HEALTHY`
* Actual: `UNHEALTHY`
* Error: `ERR_ASSERTION`

**Root cause:** An intentionally incorrect test fixture was introduced on the `lab/ci-test-failure` branch.

The failure was isolated to the simulated test. It did not indicate an actual deployment outage or application health-check failure.

## 4. Corrective Action

Updated the test fixture to use `HEALTHY` as the actual status, matching the expected value.

Committed the correction to the investigation branch, automatically triggering a new pull-request validation run.

## 5. Recovery Verification

The subsequent GitHub Actions run completed successfully.

* Automated checks: Passed
* Pull request: #1
* Merge conflicts: None
* Production impact: None

## 6. Lessons Learned

* CI failures should be investigated using the specific failed job and console output.
* An assertion failure must be distinguished from an actual service outage.
* Corrective changes should be validated through a fresh CI run.
* Pull requests allow troubleshooting without directly modifying the main branch.
* Failure and recovery evidence should be retained for auditability and knowledge sharing.

## 7. Preventive Improvements

Future exercises should use actual HTTP health-check responses rather than hardcoded status values. Additional coverage can include dependency failures, build errors, configuration issues, and deployment rollback simulations.

---

**Disclaimer:** This is an independent educational lab using synthetic failure conditions. No employer systems, production applications, or customer data were involved.
