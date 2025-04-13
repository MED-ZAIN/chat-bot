
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/MED-ZAIN/chat-bot'
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend-springboot') {
                    sh 'mvn clean install -DskipTests=false'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend-vaadin') {
                    sh 'mvn clean install -DskipTests=false'
                }
            }
        }
    }

    post {
        always {
            echo 'CI terminé'
        }
    }
}
