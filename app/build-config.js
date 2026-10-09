
'use strict';

// CI-002: Intentional syntax error for build troubleshooting.
// Training-only file. No production systems are involved.

const deploymentConfig = {
  application: 'payment-support-demo',
  environment: 'staging',
  port: 3000,
  healthCheck: '/health'
  version: '1.0.0'
};

module.exports = deploymentConfig;
