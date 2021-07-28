const express = require('express');
const redis= require ('redis');  // require is for backend and import is for front end

const app = express();
//const client = redis.createClient({host:'redis'}); // its not localhost, we are contacting in redis:6379 (default)

app.get('/', (req, res) => {
 res.send('Hello world!');
// client.incr ('mykey', (err, counter) => {
//   res.send(`${counter} visits!`);
//});
});

app.listen(4000);