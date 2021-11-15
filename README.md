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
$ Change docker image name in kubernetes file. change my project name with your new project name.
$ choco install -y skaffold
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
gcloud init (re-initialize project and open newly created project)
$ gcloud components install kubectl
$ gcloud container clusters get-credentials <clustername>
$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.0.4/deploy/static/provider/cloud/deploy.yaml
After compiling above command a new ngnix-ingress load balancer is created in your project. The ip adderss of this load balancer is satrting gateway of the application. So add the new ip adderss in system32/drivers/etc/hosts file. Add ip-address (tickecting.dev) in hosts file.
```
Creating a jwt-secret
```
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=(somekeyname)
```

