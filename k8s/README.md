# K8S config

Use Elasticsearch and Kibana to see the logs.

## Configure

Update `http-server.yaml` with the image name from Doockerhub:

```
      - name: server
        image: evgeniyarbatov/http-server:latest # Change this
```

Install CRDs and operator for ES and Kibana:

```
k create -f https://download.elastic.co/downloads/eck/2.12.1/crds.yaml
k apply -f https://download.elastic.co/downloads/eck/2.12.1/operator.yaml
```

## Create the resources

Create ES, Kibana and HTTP server:

```
k create -f .
```

## HTTP server

Connect to specific pod's shell:

```
kubectl exec --stdin --tty server-6cbdc7db5b-2smzd -- /bin/bash
```

Get URL:

```
minikube service http-server --url
```

## Access Kibana

Use port forwarding:

```
k port-forward service/kibana-kb-http 5601 
```

Open browser with https://127.0.0.1:5601