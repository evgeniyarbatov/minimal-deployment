# Scaling NodeJS with K8S

Imagine you have a bunch of NodeJS scripts. Your want to make sure that these scripts are running reliably and you can monitor them.

In this repo:

- `http-server` is a TypeScript version of a simple HTTP server
- `dockerhub` has Terraform scripts to publish `http-server` to Dockerhub
- `k8s` creates Kubernetes cluster with the HTTP server, Elasticsearch and Kibana

Why:

- Distribute Docker images instead of copying files manually
- Kubernetes uses liveness and readiness probes to check on the health of NodeJS scripts
- You can use Kubernetes to gradually rollout new versions of NodeJS scripts
- You now have centralised logging with Elasticsearch and Kibana
