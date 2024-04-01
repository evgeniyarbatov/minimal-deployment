# Dockerhub Terraform scripts

These are the Terraform scripts to package the HTTP server and push the image to Dockerhub.

Pushing images to Dockerhub will enable us to automate releasing new versions with Kubernetes.

## How to run

Create Docker Access Token and login to Dockerhub.

Update 'variables.tf' with your `base_repository_url` and `image_name`.

Run Terraform scripts to publish to Dockerhub:

```
tf init
tf apply -auto-approve
```