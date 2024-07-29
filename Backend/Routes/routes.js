


const express = require("express");
const routes = express.Router();
const axios = require('axios')
const dotenv = require('dotenv').config();
const cors = require('cors')


routes.get('/', (req,res)=>{
    res.send("from backend")
})

routes.use(cors())

//get Api movies
routes.get('/api/trending', (req,res)=>{
    const getTrending = async () => {
        const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}&language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
             axios.get(url, options)
             .then((response)=>{
                res.json(response.data)
             })
    }
    getTrending();
})

//getTvShows
routes.get('/api/tvshows', (req,res)=>{
    const getTrending = async () => {
        const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}&language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
             axios.get(url, options)
             .then((response)=>{
                res.json(response.data)
             })
    }
    getTrending();
})

//get animation
routes.get('/api/animation', (req,res)=>{
    const getTrending = async () => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=16`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
             axios.get(url, options)
             .then((response)=>{
                res.json(response.data)
             })
    }
    getTrending();
})

//getmovie details
routes.get('/api/details/:id', (req,res)=>{
    const getTrending = async () => {
        let id = req.params.id;
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&with_genres=16&append_to_response=credits`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
             axios.get(url, options)
             .then((response)=>{
                res.json(response.data)
             })
    }
    getTrending();
})









module.exports = routes


