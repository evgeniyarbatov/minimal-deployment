# Kubernetes Setup

This will configure and launch Kubernetes cluster based on Dockerhub images.

We will use fluentd to send logs to Kibana.

## Setup

Update `deployment.yaml` with the image name from Doockerhub:

```
      - name: server
        image: evgeniyarbatov/http-server:latest # Change this
```

## Run with minikube

Create the deployment:

```
k create -f .
```

Get status:

```
k get all
```

Connect to specific pod's shell:

```
kubectl exec --stdin --tty server-6cbdc7db5b-2smzd -- /bin/bash
```

Get URL:

```
minikube service server --url
```

Destroy:

```
k delete -f .
```