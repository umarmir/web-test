pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/HabibWaheed/web-test.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker-compose build'
            }
        }
        stage('Run Docker Container') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}

