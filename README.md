## Requirements
1. Maven (https://maven.apache.org/install.html)
2. Docker (https://docs.docker.com/install/)
3. Node (with npm) https://nodejs.org/en/download/

## Steps to run
1. Run docker
2. Spin up the database by running `docker-compose up -d`
3. Run the server by running `mvn install && mvn spring-boot:run`
4. Open another terminal window and run the front-end (React) by running `cd client && npm install && npm run start`

### Additional Notes
* Joining a chatroom is done by clicking on the chatroom name.
* Leaving a chatroom is done by clicking `View Rooms`.
* A user can create a profile by clicking `Create Profile`.
* A user can change profile to an existing profile by clicking `Set Profile`.