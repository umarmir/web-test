pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'nginx:alpine'
        DOCKER_TAG = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Cloning repo..."
                checkout scm
            }
        }

        stage('List Files') {
            steps {
                echo "Showing project structure..."
                sh 'ls -la'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }

        stage('Archive Website Files') {
            steps {
                echo "Archiving HTML/CSS/JS files..."
                archiveArtifacts artifacts: '**/*.html, **/*.css, **/*.js', fingerprint: true
            }
        }

        stage('Deploy (Optional)') {
            steps {
                echo "Deploying to Docker using Compose..."
                script {
                    sh 'docker-compose up -d'  // This will deploy using your docker-compose file
                }
            }
        }

        // Validate if the app is up and running
        stage('Validate Deployment') {
            steps {
                script {
                    echo 'Validating the deployment...'
                    // This will test if the app is running on port 8081 (or whichever port you exposed in Docker)
                    sh 'curl --fail http://localhost:8081 || exit 1'  // Exit with an error code if the server is not reachable
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully.'
        }
        failure {
            echo 'Pipeline failed. Check logs for more details.'
        }
    }
}


