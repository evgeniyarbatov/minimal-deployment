# Kubernetes Setup

This will configure and launch Kubernetes cluster based on Dockerhub images.

We will use fluentd to send logs to Kibana.

## Get URL to access webserver

With minikube:

```
minikube service server --url
```