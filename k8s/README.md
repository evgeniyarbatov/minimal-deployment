# Kubernetes Setup

This will configure and launch Kubernetes cluster based on Dockerhub images.

We will use fluentd to send logs to Kibana.

## Run with minikube

Update `deployment.yaml` with the image name from Doockerhub:

```
      - name: server
        image: evgeniyarbatov/http-server:latest # Change this
```

Create the deployment:

```
k create -f .
```

Get status:

```
k get all
```

Get URL:

```
minikube service server --url
```

Destroy:

```
k delete -f .
```