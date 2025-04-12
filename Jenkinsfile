pipeline {
    agent any

    tools {
        maven 'maven-3.9.9'
        jdk 'jdk-21'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/MED-ZAIN/chat-bot.git'
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
