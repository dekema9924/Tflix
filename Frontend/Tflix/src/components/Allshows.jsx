
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
function Allshows() {

    const [isallshows, setallshows] = useState({});
    const [isLoading, setLoading] = useState(true)

    //fetch api
    useEffect(() => {
        const allShows = async () => {
            const response = await axios.get('http://localhost:3000/routes/api/tvshows')
            setallshows(response.data)
            setLoading(false)

        }
        allShows();

    }, []);
    return (
        <>
            <div>
                <form className='bg-[#1e293b] pb-5' action="">
                    <div className=' flex items-center justify-center  text-white '>
                        <SearchIcon className='relative left-10' />
                        <input className='bg-[#5a6472] w-11/12 h-12 rounded-md pl-10 outline-none' type="text" placeholder='Search Movies' />
                    </div>
                </form>
            </div>

            <div>
                <p className='font-bold text-3xl  w-fit mt-3 p-4'>Discover TvShows</p>
                <div className='flex gap-10 flex-wrap mt-5 p-4 sm:justify-around'>
                    {
                        !isLoading ? <>
                            {
                                isallshows.results.map((shows) => {
                                    let vote_average = shows.vote_average.toString().slice(0, 4)
                                    return (

                                        <>
                                            <Link to={`/details/${shows.id}`}>
                                                <div className='w-40 pt-5 overflow-hidden text-black ' key={shows.id} >
                                                    <img className='w-40 hover:scale-105  transition-all delay-150 cursor-pointer rounded-lg hover:opacity-55 border-2 ' src={`https://image.tmdb.org/t/p/original/${shows.poster_path}`} alt="movie-cover" />
                                                    <p className='font-bold mt-3'>{shows.name}</p>
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

export default Allshows