
// Jenkinsfile pour le projet my-app
// Ce fichier contient plusieurs versions du pipeline pour résoudre l'erreur SonarQube
// Choisis une version en fonction de tes besoins et décommente-la

// ======================
// VERSION 1 : Avec Maven (recommandée pour un projet Java avec Maven)
// ======================

/*
node {
    stage('SCM') {
        // Récupère le code source depuis GitHub
        checkout scm
    }
    stage('Build') {
        // Configure l'outil Maven nommé 'backend' (vérifie dans Jenkins Global Tool Configuration)
        def mvn = tool 'backend'
        // Compile le projet pour générer les fichiers .class
        sh "${mvn}/bin/mvn clean compile"
    }
    stage('SonarQube Analysis') {
        // Configure l'environnement SonarQube
        withSonarQubeEnv('SonarQube') {
            def mvn = tool 'backend'
            // Exécute l'analyse SonarQube avec Maven
            sh "${mvn}/bin/mvn sonar:sonar " +
               "-Dsonar.projectKey=app-web " +
               "-Dsonar.projectName='app-web' " +
               "-Dsonar.java.binaries=target/classes " +
               "-Dsonar.sources=."
        }
    }
}
*/

// ======================
// VERSION 2 : Avec sonar-scanner
// ======================

/*
node {
    stage('SCM') {
        checkout scm
    }
    stage('Build') {
        def mvn = tool 'backend'
        sh "${mvn}/bin/mvn clean compile"
    }
    stage('SonarQube Analysis') {
        withSonarQubeEnv('SonarQube') {
            sh "/var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/sonarqube/bin/sonar-scanner " +
               "-Dsonar.host.url=http://16.16.241.198:9000 " +
               "-Dsonar.projectKey=app-web " +
               "-Dsonar.projectName='app-web' " +
               "-Dsonar.java.binaries=target/classes " +
               "-Dsonar.sources=."
        }
    }
}
*/

// ======================
// VERSION 3 : Sans analyse Java (exclut les fichiers Java)
// ======================

node {
    stage('SCM') {
        checkout scm
    }
    stage('SonarQube Analysis') {
        withSonarQubeEnv('SonarQube') {
            sh "/var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/sonarqube/bin/sonar-scanner " +
               "-Dsonar.host.url=http://16.16.241.198:9000 " +
               "-Dsonar.projectKey=app-web " +
               "-Dsonar.projectName='app-web' " +
               "-Dsonar.exclusions=**/*.java " +
               "-Dsonar.sources=."
        }
    }
}
