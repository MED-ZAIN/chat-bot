node {
  stage('SCM') {
    checkout scm
  }
  stage('Build') {
    def mvn = tool 'backend'
    sh "${mvn}/bin/mvn clean compile" // Compile le projet pour générer les .class
  }
  stage('SonarQube Analysis') {
    def mvn = tool 'backend'
    withSonarQubeEnv() {
      sh "${mvn}/bin/mvn sonar:sonar -Dsonar.projectKey=app-web -Dsonar.projectName='app-web' -Dsonar.java.binaries=target/classes"
    }
  }
}
