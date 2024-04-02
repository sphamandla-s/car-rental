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
        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh "docker login -u $USERNAME -p $PASSWORD"
                    sh "docker push car-rental"  // Replace with your actual image name if different
                }
            }
        }
        stage('Run Docker Container (Optional)') {  // Optional stage to run the container
            steps {
                sh '/usr/local/bin/docker run -p 8090:80 car-rental .'
            }
        }
    }
}
