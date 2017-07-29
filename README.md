# docker-orchestration
Playing with docker compose using Redis and Node.js, 

based in the book:[Learning Docker](https://www.amazon.es/Learning-Docker-Second-Jeeva-Chelladhurai/dp/1786462923) from the editorial Packt.

## Getting started

Execute the following commands from the Docker host:

   - docker-compose build
   - docker-compose pull
   - docker-compose up
   
To test the application I used curl, for example:

curl http://localhost:8080/build

curl http://localhost:8080/kill

curl http://localhost:8080/ansiblerules

