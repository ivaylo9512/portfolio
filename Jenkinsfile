pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim' 
            args '-p 3011:3011' 
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
    }
}