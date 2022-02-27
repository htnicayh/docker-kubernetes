## Getting Started

Download [Docker Desktop](https://www.docker.com/products/docker-desktop) for Mac or Windows. [Docker Compose](https://docs.docker.com/compose) will be automatically installed. On Linux, make sure you have the latest version of [Compose](https://docs.docker.com/compose/install/).

Run in this directory (In detach mode):
```
docker-compose up -d
```
The app will be running at [http://localhost:3000](http://localhost:3000)

------------------------------------------

### With Utility Container
To Create Project:
```
docker-conpose run [image_name] init
```
To install dependencies:
```
docker-compose run [image_name] install
```

------------------------------------------

### With Kubernetes
First Step, Install [Minikube](https://kubernetes.io/vi/docs/tasks/tools/install-minikube/), [HyperV](https://kubernetes.io/vi/docs/tasks/tools/install-minikube/) or [VirtualBox](https://kubernetes.io/vi/docs/tasks/tools/install-minikube/)

Then login in DockerHub
```
docker login
```
Following with image in DockerHub [kube-scrum](https://hub.docker.com/repository/docker/130620/kube-scrum) to build containers.

Starting kubernetes with command (After install Virtual or Enable Hyper-V in Windows 10)
```
minikube start --driver=hyperv
minikube start --driver=virtualbox
```

Run Kubernetes Sample
```
kubectl create deployment (kubernete_name) --image=[ImageURL]
```

See Deployments, Pods and more than that by command
```
minikube dashboard
```
