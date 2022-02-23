### steps 
1. install k3s on server and workers
- on server ```curl -sfL https://get.k3s.io | sh -s -```
```sudo cat /var/lib/rancher/k3s/server/node-token ```
- copy token
- change k3 config permissions
``` sudo chmod 644 /etc/rancher/k3s/k3s.yaml```
- on node ```curl -sfL https://get.k3s.io | K3S_URL=https://{SERVER_HOSTNAME}:6443 K3S_TOKEN={TOKEN} sh -s -```
3. copy kube config to local machine
```scp rock01:/etc/rancher/k3s/k3s.yaml ~/.kube/config```
4. deploy dpgraham namespace, app, service
```kubectl apply -f dpgraham-ns.yaml```
```kubectl apply -f dpgraham.yaml```
```kubectl apply -f dpgraham-svc.yaml```
5. deploy cert-manager for arg
``` kuectl apply -f cert-manager-arm.yaml```
- note this creates the cert-manager namespace
6. deploy clusterissuer for letsencrypt
```kubectl apply -f le-prod.yaml```
7. deploy ingress to dpgraham
```kubectl apply -f dpgraham-ingress.yaml```
