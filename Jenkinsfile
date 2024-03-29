pipeline {
    agent any
 
    tools {
        dockerTool "CarRentalDocker"
    }


    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/sphamandla-s/car-rental'
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
