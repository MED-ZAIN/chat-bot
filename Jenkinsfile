node {
    stage('SCM') {
        checkout scm
    }
    stage('SonarQube Analysis') {
        withSonarQubeEnv('SonarQube') { // Remplace 'SonarQube' par le nom exact de ta configuration SonarQube dans Jenkins
            sh "/var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/sonarqube/bin/sonar-scanner \
                -Dsonar.host.url=http://16.16.241.198:9000 \
                -Dsonar.projectKey=app-web \
                -Dsonar.projectName='app-web' \
                -Dsonar.exclusions=**/*.java"
        }
    }
}
