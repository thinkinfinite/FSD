pipeline {
  agent { label 'master'}
  stages {
    stage('Checkout'){
      steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'Yu-SSH-Key', url: 'git@github.com:thinkinfinite/FSD.git']]])
      }
    }
    stage('Compile'){
      steps {
        bat 'npm install'
      }
    }
    stage('Deploy'){
      steps {
        bat 'ng build --prod'
        sh 'scp -r dist tyucd@127.0.0.1:/var/www/temp_deploy/dist/'
      }
    }
  }
  post {
    always {
      sh 'echo '"${env.JOB_NAME} [${currentBuild.displayName}] ${currentBuild.currentResult} after ${currentBuild.durationString} (<${currentBuild.absoluteUrl}|Open>)"'
    }
  }
}
