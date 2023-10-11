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