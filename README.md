## Notes on starting the webserver
"""Bash
docker network create -d overlay --attachable swarm-net
cd reverse-proxy
docker stack deploy --compose-file docker-compose.yml reverse-proxy-stack
cd ../dpgraham
docker stack deploy --compose-file docker-compose.yml dpgraham-stack
"""

