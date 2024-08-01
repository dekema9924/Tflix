import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieIcon from '@mui/icons-material/Movie';
import { Link } from 'react-router-dom'



function Movies() {

    const [isTrending, setTrending] = useState({});
    const [isLoading, setLoading] = useState(true)

    //fetch api
    useEffect(() => {
        const getTrending = async () => {
            const response = await axios.get('https://tflixbackend.onrender.com/routes/api/trending')
            setTrending(response.data)
            setLoading(false)

        }
        getTrending();

    }, []);
    return (
        <>

            <div className='pl-10 sm:pl-0 bg-black text-white'>
                <div className='flex items-center justify-between  pt-10'>
                    <div className='flex items-center  '>
                        <MovieIcon className='text-yellow-700' />
                        <p className='font-bold text-2xl'>Trending Movies</p>
                    </div>
                    <div className='  mr-10 border-2 rounded-lg w-20 text-center  '>
                        <Link to='/movies' className='cursor-pointer'><p className='text-white'>See All</p></Link>
                    </div>
                </div>


                <div className='flex gap-10 sm:gap-2 flex-wrap h-96 overflow-hidden sm:justify-around'>
                    {
                        !isLoading ? <>
                            {
                                isTrending.results.slice(0, 7).map((movies) => {
                                    let vote_average = movies.vote_average.toString().slice(0, 4)
                                    return (

                                        <>
                                            <Link to={`/details/${movies.id}`} key={movies.id}>
                                                <div className='w-40 pt-5 overflow-hidden'>
                                                    <img className='w-40 hover:scale-105  transition-all delay-150 cursor-pointer rounded-lg hover:opacity-55 border-2 ' src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt="movie-cover" />
                                                    <p className='font-bold  w-40  mt-3'>{movies.title}{movies.name}</p>
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

export default Movies