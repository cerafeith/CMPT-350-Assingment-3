## Requirements. 
1. Maven (https://maven.apache.org/install.html)
2. Docker (https://docs.docker.com/install/)
3. Node (with npm) https://nodejs.org/en/download/

## Steps to run
1. Run docker
2. Spin up the database by running `docker-compose up -d`
3. Run the server by running `mvn install && mvn spring-boot:run`
4. Open another terminal window and run the front-end by running `cd client && npm install && npm run start`