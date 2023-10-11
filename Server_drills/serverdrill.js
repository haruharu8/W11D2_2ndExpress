const express = require('express')

const app = express();

let user = 'James';

app.get('/', (req, res) => {
    res.send('Welcome to my server')
})

app.get('/user', (req, res) => {
    res.send(user)
})

app.listen(3000, () => {
    console.log('Server has started');
})





const express = require('express')

const app = express();

let user = 'Cindy';

app.get('/', (req, res) => {
    res.send("welcome to Cindy's server")
})

app.get('/user', (req, res) => {
    res.send(user)
})

app.listen(3000, () => {
    console.log("server has super started");
})





const express = require('express')

const app = express();

let user = 'Amanda';

app.get('/', (req, res) => {
    res.send("welcome to amanda server")
})

app.get('/user', (req, res) => {
    res.send(user)
})

app.listen(3000, () => {
    console.log("server has started yeeeeea");
})