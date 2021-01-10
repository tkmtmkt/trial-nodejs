pipeline {
  agent {
    docker 'node:14.15.3-slim'
  }
  stages {
    stage('prepare') {
      steps {
        sh 'npm ci'
      }
    }
    stage('test') {
      steps {
        sh 'npm test -- --coverage'
      }
    }
    stage('JSDoc') {
      steps {
        sh 'npm run jsdoc'
      }
    }
    stage('build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
