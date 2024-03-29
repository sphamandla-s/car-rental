pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', credentialsId: 'car-rental-secret-github-token', url: 'https://github.com/sphamandla-s/car-rental'
            }
        }
        stage('Docker Build image') {
            steps {
                script {
                   sh '/usr/local/bin/docker build -t car-rental .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '/usr/local/bin/docker run -p 8090:80 car-rental .'
            }
        }
    }
}
