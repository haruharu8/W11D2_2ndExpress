const express = require('express');

const app = express();

const movies = [ { 
    id: 1, 
    title: "Inception", 
    director: "Christopher Nolan",
    year: 2010 
}, 
{   id: 2, 
    title: "Interstellar", 
    director: "Christopher Nolan", 
    year: 2014 
}, 
{
    id: 3, 
    title: "Parasite", 
    director: "Bong Joon-ho", 
    year: 2019 
}, 
{   id: 4, 
    title: "The Matrix", 
    director: "The Wachowskis", 
    year: 1999 
} ];

app.get("/", (req, res) => {
    res.send(" Welcome to the Movie API! Use /info for guidance.")
} )

app.get("/info", (req,res) => {
    res.send("To fetch all movies, use GET /movies. To add a new movie, use POST /movies. To update  or delete a movie, use PUT or DELETE on /movies/:id respectively.")
})

app.get("/movies", (req,res) => {
    res.send(movies)
})

// app.get("/movies/:id", (res,req) => {
//     //returns a specific movie based on the provided ID
// })

app.listen(3000, () => {
    console.log("server has super started");
})