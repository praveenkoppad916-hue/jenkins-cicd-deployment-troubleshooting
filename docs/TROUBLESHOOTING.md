# Deployment Troubleshooting Playbook

All examples are fictional.

## Incident 1 — Syntax error at validation
**Signal:** `SyntaxError` in the Validate stage.
**Investigate:** Read the first error in Jenkins Console Output; run `npm run check` locally.
**Resolution:** Correct syntax, rerun validation and tests.

## Incident 2 — Test regression
**Signal:** `npm test` exits non-zero.
**Investigate:** Identify failing assertion, compare expected and actual response, reproduce locally.
**Resolution:** Fix application behavior or incorrect test expectation; do not bypass tests.

## Incident 3 — Docker daemon unavailable
**Signal:** `Cannot connect to the Docker daemon` in Package stage.
**Investigate:** Confirm Docker service is running and Jenkins agent is permitted to use it.
**Resolution:** Restore access using your environment's approved permissions. Avoid broadly exposing the Docker socket.

## Incident 4 — Port already allocated
**Signal:** `EADDRINUSE` or Docker port binding failure.
**Investigate:** Check whether another service owns port 3000; inspect running containers.
**Resolution:** Stop the conflicting demo service or choose another host port (e.g. `-p 3001:3000`).

## Incident 5 — Post-deployment health check fails
**Signal:** HTTP 5xx, timeout, or unexpected JSON from `/health`.
**Investigate:** Check container logs, process startup, environment configuration, health endpoint and network reachability.
**Resolution:** Halt promotion; redeploy a previously verified image under change-control procedures. Re-run health checks and document the incident.

## Sample RCA template
- Incident ID and impact
- Detection time and alert
- Last known healthy release
- Failed pipeline stage / deployment step
- Evidence: synthetic logs and commands
- Root cause and contributing factors
- Recovery / rollback steps
- Prevention and follow-up owners
