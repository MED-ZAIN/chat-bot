pipeline {
  agent any

  environment {
    MAVEN_HOME = tool 'maven-3.9.9'
    NODE_HOME = tool name: 'node-22', type: 'NodeJSInstallation'
    PATH = "${env.NODE_HOME}\\bin;${env.PATH}"
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/monuser/monrepo.git' // à adapter
      }
    }

    stage('Build Backend') {
      steps {
        dir('backend') {
          bat "\"%MAVEN_HOME%\\bin\\mvn\" clean install"
        }
      }
    }

    stage('Run Backend Tests') {
      steps {
        dir('backend') {
          bat "\"%MAVEN_HOME%\\bin\\mvn\" test"
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('frontend') {
          bat 'npm install'
          bat 'npm run build'
        }
      }
    }

    stage('Archive Artefacts') {
      steps {
        archiveArtifacts artifacts: 'backend\\target\\*.jar', fingerprint: true
        archiveArtifacts artifacts: 'frontend\\build\\**', fingerprint: true
      }
    }

    stage('Deploy') {
      when {
        branch 'main'
      }
      steps {
        echo "Déploiement ici (Docker, copie de fichier, etc.)"
        // Exemple Windows :
        // bat 'copy backend\\target\\app.jar \\\\server\\deploy\\app\\'
      }
    }
  }

  post {
    success {
      echo 'Build réussi !'
    }
    failure {
      echo 'Échec du build.'
    }
  }
}
