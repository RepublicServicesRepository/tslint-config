node {
  stage('Clean workspace') {
    cleanWs()
  }

  stage('Checkout') {
    checkout scm
  }

  stage('Deploy') {
    nodejs('node10.15.3') {
      withCredentials([
        usernamePassword(credentialsId: '09ce363d-4e67-470a-8a66-13190b795222', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME'),
        string(credentialsId: '5baaf4bf-031d-41da-8dca-f977c594e5e4', variable: 'NPM_TOKEN')
      ]) {
        sh 'git config user.name "republic-system"'
        sh 'git config user.email "${GIT_USERNAME}"'

        sh 'npx standard-version'
        sh 'git push origin HEAD:master --follow-tags && npm publish'
      }
    }
  }
}
