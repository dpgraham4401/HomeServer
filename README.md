## home server
docker images and scripts the arm based home server runs
1. website
2. nginx reverse proxy
3. ghetto-rigs smartphone remte control
4. automated LED light dimming
5. etc. etc.

![Alt text](https://i.ibb.co/3kPyQHy/gaea2.jpg "Rock64 cluster")

Notes on starting the webserver
```Bash
cd $PARENT_DIR/HomeServer
docker network create -d overlay --attachable swarm-net
cd reverse-proxy
docker stack deploy --compose-file docker-compose.yml reverse-proxy-stack
cd ../dpgraham
docker stack deploy --compose-file docker-compose.yml dpgraham-stack
```
