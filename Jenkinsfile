pipeline {
  agent any

  environment {
    MAVEN_HOME = tool 'maven-3.9.0'
    NODE_HOME = tool name: 'node-18', type: 'NodeJSInstallation'
    PATH = "${NODE_HOME}/bin:${env.PATH}"
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
          sh "${MAVEN_HOME}/bin/mvn clean install"
        }
      }
    }

    stage('Run Backend Tests') {
      steps {
        dir('backend') {
          sh "${MAVEN_HOME}/bin/mvn test"
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('frontend') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }

    stage('Archive Artefacts') {
      steps {
        archiveArtifacts artifacts: 'backend/target/*.jar', fingerprint: true
        archiveArtifacts artifacts: 'frontend/build/**', fingerprint: true
      }
    }

    // Déploiement (optionnel)
    stage('Deploy') {
      when {
        branch 'main'
      }
      steps {
        echo "Déploiement ici (Docker, SCP, etc.)"
        // Exemple :
        // sh 'scp backend/target/app.jar user@server:/opt/app/'
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
