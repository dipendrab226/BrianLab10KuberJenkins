FROM node:10-alpine  
                          # create  a working directory
WORKDIR /main          
COPY . /main
                         # copy files into the main
RUN npm install
                         # run the dockerfile inside the container
EXPOSE 4000

CMD ["node", "index.js"]