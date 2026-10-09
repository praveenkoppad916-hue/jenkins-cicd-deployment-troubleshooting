# Learning Path

1. Run `npm run check` and `npm test` on Windows with Node.js 20+.
2. Run the HTTP service and verify `/health` using a browser or `curl`.
3. Create a GitHub repository, push the files and verify the GitHub Actions workflow.
4. Install Docker Desktop (where supported), build and run the demo image locally.
5. Configure a Jenkins Pipeline job using the repository `Jenkinsfile` on a trusted agent with Node.js and Docker.
6. Reproduce a controlled validation/test failure on a separate branch, inspect the failing stage, fix it, and record the outcome.
7. Design a local-only deployment and rollback exercise, with manual approval and image version tracking, before extending the Jenkinsfile.
