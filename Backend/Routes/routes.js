


const express = require("express");
const routes = express.Router();
const axios = require('axios')
require('dotenv').config();
const cors = require('cors')



routes.get('/', (req, res) => {
    res.send("from backend")
})

routes.use(cors())
routes.use(express.json())


//get Api movies
routes.get('/api/trending', (req, res) => {
    const getTrending = async () => {
        const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}&language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        axios.get(url, options)
            .then((response) => {
                res.json(response.data)
            })
    }
    getTrending();
})

//getTvShows
routes.get('/api/tvshows', (req, res) => {
    const getTrending = async () => {
        const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}&language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        axios.get(url, options)
            .then((response) => {
                res.json(response.data)
            })
    }
    getTrending();
})

//get animation
routes.get('/api/animation', (req, res) => {
    const getTrending = async () => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=16`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        axios.get(url, options)
            .then((response) => {
                res.json(response.data)
            })
    }
    getTrending();
})

//getmovie details
routes.get('/api/details/:id', (req, res) => {
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
            .then((response) => {
                res.json(response.data)
            })
    }
    getTrending();
})


//get movie trailer
routes.get('/api/trailer/:id', (req, res) => {
    const getTrending = async () => {
        let id = req.params.id;
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        axios.get(url, options)
            .then((response) => {
                res.json(response.data)
            })
    }
    getTrending();
})

//get tvshow details
routes.get('/api/tvdetails/:id', (req, res) => {
    const getTrending = async () => {
        let id = req.params.id;
        const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&append_to_response=credits`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        axios.get(url, options)
            .then((response) => {
                res.json(response.data)

            })
    }
    getTrending();
})

//gettv shows trailer
routes.get('/api/tvtrailer/:id', (req, res) => {
    const getTrending = async () => {
        let id = req.params.id;
        const url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.API_KEY}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        axios.get(url, options)
            .then((response) => {
                res.json(response.data)

            })
    }
    getTrending();
})


//post movie
routes.post('/api/search', async (req, res) => {
    const search = await req.body.movieName

    const getTrending = async () => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${search}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        axios.get(url, options)
            .then((response) => {
                res.send(response.data)

            })
    }
    getTrending();




})

//post tvshows
routes.post('/api/tvsearch', async (req, res) => {
    const tv = await req.body.tvName
    console.log(tv)
    const getTrending = async () => {
        const url = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.API_KEY}&query=${tv}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        axios.get(url, options)
            .then((response) => {
                res.send(response.data)

            })
    }
    getTrending();




})













module.exports = routes


