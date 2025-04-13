pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/MED-ZAIN/chat-bot.git'
            }
        }

        stage('Build Backend') {
            steps {
                dir('my-application') {
                    sh 'mvn clean install -DskipTests=false'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('my-application') {
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
