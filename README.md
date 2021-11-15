# Authentication-with-K8S
[![npm version](https://badge.fury.io/js/react-native.svg)](https://badge.fury.io/js/react-native)
![kubernetes](https://img.shields.io/badge/Kubernetes-deploy-green)
![code](https://img.shields.io/badge/code-success-green)
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This is a BackEnd code for SignIn, SignUp and SignOut using React and Node. Kubernetes, Docker and GCP is used for automatic deployment on cloud services.

## Technologies
Project is created with:
* Backend: Express and Node
* Frontend: React
* Deployment: Kubernetes

## Setup
To run this project, first install skaffold, npm and kubernetes on local machine:

```
$ git clone https://github.com/vamsivenkat987/Authentication-with-K8S.git
$ Change your Docker repo name in every Dockerfile and update same repo in kubernetes yaml file.
windows
$ Install docker desktop for windows and run kubernetes init
$ choco install -y skaffold
$ cd infra/k8s 
$ kubectl apply -f *
$ cd ../..
$ skaffold dev
```
Some configuration on Google Cloud
```
1) Create Google cloud free trail.
2) After successful creation of Google Cloud, Create a new project. 
3) Create a new Kubernetes Engine in the Compute section. 
4) Create a new Cloud Build for contionus integration and continous deployment.
5) To run google commands in windows terminal, gcloud is used. 
$ (New-Object Net.WebClient).DownloadFile("https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe", "$env:Temp\GoogleCloudSDKInstaller.exe") & $env:Temp\GoogleCloudSDKInstaller.exe

    


```

