# Web socket chat

A chat made with nodejs and websockets.

## Running project

*To run this project you should have node installed in you machine.

*Also an instance of mongodb is required.

In this project was used an docker container
if you're not using docker or a local instance of the database you have to change the
connection url in `./src/http` line 12.

*To get docker: https://docs.docker.com/get-docker/

Create a container with mongodb installed:
```bash
  docker run --name mongodb -p 27017:27017 -d -t mongo
```

```bash
  # Clone this repository
  git clone https://github.com/DanielSLucas/WebSocketChat.git

  # Change to the project directory
  cd WebSocketChat

  # Install dependencies 
  npm i

  # start mongodb
  docker start mongodb

  # run dev script
  npm run dev
```

To access the chat use `http://localhost:3000`.