node {
    stage('SCM') {
        // Récupère le code source depuis le SCM configuré (GitHub)
        checkout scm
    }
    stage('Build') {
        // Configure l'outil Maven nommé 'backend' (doit être défini dans Jenkins)
        def mvn = tool 'backend'
        // Compile le projet pour générer les fichiers .class dans target/classes
        sh "${mvn}/bin/mvn clean compile"
    }
    stage('SonarQube Analysis') {
        // Configure l'environnement SonarQube (remplace 'SonarQube' par le nom exact dans Jenkins)
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
