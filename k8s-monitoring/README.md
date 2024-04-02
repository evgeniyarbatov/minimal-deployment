# Monitoring

We will use Elasticsearch and Kibana to visualize the logs.

## Setup

Install CRDs and operator:

```
k create -f https://download.elastic.co/downloads/eck/2.12.1/crds.yaml
k apply -f https://download.elastic.co/downloads/eck/2.12.1/operator.yaml
```

Create ES and Kibana:

```
k create -f elasticsearch.yaml
k create -f kibana.yaml
```

Use port forwarding:

```
k port-forward service/kibana-kb-http 5601 
```

Open browser with https://127.0.0.1:5601

Password is 

```
k get secret elasticsearch-es-elastic-user -o go-template='{{.data.elastic | base64decode}}'
```