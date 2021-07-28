# Docker Intro
- We need docker so that we don't have to worry about matching/working of all the softwares with other softwares and OS.
- Docker creates containerized apps for each microservices where all of them used the host's kernel.
- You can run Linux OS docker containers in Linux OS host.
- You cannot run Windows OS docker containers in Linux OS host.
- You cannot run Linux OS docker containers in Windows OS host. ( You can as Windows creates linux VM on top)

- The main difference between VM and Docker Container is that docker container run on top `Docker-Engine` where as VMs run on top of `Hypervisor`. Both Hypervisor and Docker-Engine run on top of OS kernel.
    - VMS have their own OS but docker containers use the same hosts OS kernel
    
# Lab 10
- Build the app using docker  :          docker build  -t ImageName:TagName dir   
`docker build -t express-demo .`         '.' is ther root dir

- Then check to make sure it built correctly.  
`docker image ls`

- If so, run it with docker            
 `docker run -d -p 3000:3000 express-demo`
 `-d` - for running in the background/detached mode
 `-p` - is used to map the port number of the internal Docker 
       image to our main Ubuntu server so that we can access the container accordingly.

- If working correctly at port 3000, stop it with   
`docker container stop <container id>`

- See all the running containers    
 `docker ps`

#  Push to dockerhub     
  docker tag imageID Repositoryname     
 `docker tag 349f2af2a827 bparra/express-demo:tagname`
 `docker push bparra/express-demo:tagname`

# Docker - Container LifeCycle
` docker stop ContainerID `
` docker stats ContainerID `
` docker attach ContainerID `
` docker inspect Container/Image `   - displays low-level information in the container.
` docker pause ContainerID `
` docker unpause ContainerID`
` docker kill ContainerID`

# Tool for docker Orchestration - Swarm  And Kubernetes
## Creating a stack
- First enter swarm mode.           `docker swarm init`

- Deploy the stack with a name.  `docker stack deploy -c docker-compose.yml swarm-demo`

save the output so that more machines can join later
> ` docker swarm join --token xxx `

- To take down the stack   `docker stack remove swarm-demo`

- Then leave the swarm      `docker swarm leave --force`

# Docker Daemon
` service docker start `
` service docker stop `

# Docker file
` From ` : It tells docker, from which base image you want to base your image from. 
` MAINTAINER `: the person who is going to maintain this image.
` RUN  `: run instructions against the image
` CMD ` : command that is used

Note: you can use multiple RUN command but you can only have one CMD

# Mapping Ports in Docker
- In Docker, the containers themselves can have applications running on ports. When you run a container, if you want to access the application in the container via a port number, you need to map the port number of the container to the port number of the Docker host.

# Private Repo
- ` sudo docker run –d –p 5000:5000 –-name registry registry:2`# BrianLab10KuberJenkins
