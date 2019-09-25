node {
  stage('Checkout') {
    checkout scm
  }

  stage('Deploy') {
    nodejs('node10.15.3') {
      withCredentials([string(credentialsId: '5baaf4bf-031d-41da-8dca-f977c594e5e4', variable: 'NPM_TOKEN')]) {
        sh "npx standard-version"
        sh "git push --follow-tags origin HEAD && npm publish"
      }
    }
  }
}
