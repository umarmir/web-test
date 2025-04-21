pipeline {
    agent any

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

        stage('Archive Website Files') {
            steps {
                echo "Archiving HTML/CSS/JS files..."
                archiveArtifacts artifacts: '**/*.html, **/*.css, **/*.js', fingerprint: true
            }
        }

        stage('Deploy (Optional)') {
            steps {
                echo "You can add deployment logic here (e.g. FTP, SCP, etc)"
            }
        }
    }
}
