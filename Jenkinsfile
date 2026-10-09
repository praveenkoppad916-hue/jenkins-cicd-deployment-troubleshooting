pipeline {
  agent any
  options { timestamps(); timeout(time: 15, unit: 'MINUTES') }
  stages {
    stage('Checkout') {
      steps { checkout scm }
    }
    stage('Validate') {
      steps { sh 'node --version && npm run check' }
    }
    stage('Test') {
      steps { sh 'npm test' }
    }
    stage('Package') {
      steps { sh 'docker build -t support-demo:${BUILD_NUMBER} .' }
    }
  }
  post {
    success { echo 'Validation, tests and Docker image build succeeded.' }
    failure { echo 'Pipeline failed: review the first failing stage and console output.' }
    always { echo 'Demo pipeline complete; no deployment was performed.' }
  }
}
