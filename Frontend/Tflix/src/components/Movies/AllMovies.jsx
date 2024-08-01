import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllMovies() {
    const [isallmovies, setallmovies] = useState({});
    const [isLoading, setLoading] = useState(true)
    const [movieName, setmovieName] = useState({})
      //fetch api
      useEffect(() => {
        const allMovies = async () => {
            const response = await axios.get('http://localhost:3000/routes/api/trending')
            setallmovies(response.data)
            setLoading(false)

        }
        allMovies();

    }, []);


    const Handleform =async (e)=>{
        e.preventDefault();
        //post to backend
       await axios.post('https://tflixbackend.onrender.com/routes/api/search',  {
            movieName
        })
        .then((res)=>{
            setallmovies(res.data)
        })
        

    }
    const HandleInput = (e)=>{
        setmovieName(e.target.value)
    }


    return (
        <>
            <div>
                <form onSubmit={Handleform} className='bg-[#1e293b] pb-5' action=""  method="Post">
                    <div className=' flex items-center justify-center  text-white '>
                        <SearchIcon className='relative left-10' />
                        <input onChange={HandleInput} className='bg-[#5a6472] w-11/12 h-12 rounded-md pl-10 outline-none' type="text" name='movieName' placeholder='Search Movies' />
                    </div>
                </form>
            </div>

            <div>
                <p className='font-bold text-3xl  w-fit mt-3 p-4'>Discover Movies</p>
                <div className='flex sm:gap-2 gap-10 flex-wrap mt-5 p-4 sm:justify-around'>
                    {
                        !isLoading ? <>
                            {
                                isallmovies.results.map((movies) => {
                                    let vote_average = movies.vote_average.toString().slice(0, 4)
                                    return (

                                        <>
                                        <Link to={`/details/${movies.id}`}>
                                        <div className='w-40 pt-5 overflow-hidden ' key={movies.id} >
                                                <img className='w-40 hover:scale-105  transition-all delay-150 cursor-pointer rounded-lg hover:opacity-55 border-2 ' src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt="movie-cover" />
                                                <p className='font-bold mt-3'>{movies.title}</p>
                                                <div className='flex items-center  justify-between'>
                                                    <p>2024</p>
                                                    <p className='mr-3'>⭐️ {vote_average}</p>
                                                </div>
                                            </div>
                                        </Link>
                                  

                                        </>
                                    )
                                })
                            }
                        </> : "...Loading"
                    }

                </div>
            </div>

        </>
    )
}

export default AllMovies