pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t my-static-site .'
                }
            }
        }

        stage('Remove Existing Container (if any)') {
            steps {
                script {
                    sh 'docker rm -f my-static-container || true'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh 'docker run -d -p 8082:80 --name my-static-container my-static-site'
                }
            }
        }

        stage('Test Deployment') {
            steps {
                script {
                    // Add a check to confirm the site is running
                    sh 'curl http://localhost:8082'
                }
            }
        }
    }
}


