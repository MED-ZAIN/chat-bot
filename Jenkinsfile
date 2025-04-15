// Jenkinsfile pour le projet my-app
// Ce fichier contient plusieurs versions du pipeline pour résoudre l'erreur SonarQube
// Choisis une version en fonction de tes besoins et commente les autres

// VERSION 1 : Avec Maven (recommandée pour un projet Maven avec analyse Java)
// Cette version compile les fichiers Java et utilise 'mvn sonar:sonar' pour l'analyse SonarQube
node {
    stage('SCM') {
        // Récupère le code source depuis GitHub
        checkout scm
    }
    stage('Build') {
        // Configure l'outil Maven nommé 'backend' (vérifie dans Jenkins Global Tool Configuration)
        def mvn = tool 'backend'
        // Compile le projet pour générer les fichiers .class dans target/classes
        sh "${mvn}/bin/mvn clean compile"
    }
    stage('SonarQube Analysis') {
        // Configure l'environnement SonarQube (remplace 'SonarQube' par le nom exact dans Jenkins)
        withSonarQubeEnv('SonarQube') {
            def mvn = tool 'backend'
            // Exécute l'analyse SonarQube avec Maven
            sh "${mvn}/bin/mvn sonar:sonar \
                -Dsonar.projectKey=app-web \
                -Dsonar.projectName='app-web' \
                -Dsonar.java.binaries=target/classes \
                -Dsonar.sources=."
        }
    }
}


// VERSION 2 : Avec sonar-scanner (pour utiliser le plugin SonarQube de Jenkins)
// Cette version compile les fichiers Java et utilise 'sonar-scanner' pour l'analyse
node {
    stage('SCM') {
        // Récupère le code source depuis GitHub
        checkout scm
    }
    stage('Build') {
        // Configure l'outil Maven nommé 'backend'
        def mvn = tool 'backend'
        // Compile le projet pour générer les fichiers .class
        sh "${mvn}/bin/mvn clean compile"
    }
    stage('SonarQube Analysis') {
        // Configure l'environnement SonarQube
        withSonarQubeEnv('SonarQube') {
            // Exécute sonar-scanner avec les propriétés nécessaires
            sh "/var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/sonarqube/bin/sonar-scanner \
                -Dsonar.host.url=http://16.16.241.198:9000 \
                -Dsonar.projectKey=app-web \
                -Dsonar.projectName='app-web' \
                -Dsonar.java.binaries=target/classes \
                -Dsonar.sources=."
        }
    }
}
*/


// VERSION 3 : Sans analyse Java (exclut les fichiers Java)
// Utilise cette version si les fichiers Java ne doivent pas être analysés
// Par exemple, si le projet est principalement JavaScript, TypeScript, ou autre
node {
    stage('SCM') {
        // Récupère le code source depuis GitHub
        checkout scm
    }
    stage('SonarQube Analysis') {
        // Configure l'environnement SonarQube
        withSonarQubeEnv('SonarQube') {
            // Exécute sonar-scanner en excluant les fichiers Java
            sh "/var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/sonarqube/bin/sonar-scanner \
                -Dsonar.host.url=http://16.16.241.198:9000 \
                -Dsonar.projectKey=app-web \
                -Dsonar.projectName='app-web' \
                -Dsonar.exclusions=**/*.java \
                -Dsonar.sources=."
        }
    }
}
*/
