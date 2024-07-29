

//add trending tv shows sections
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Link } from 'react-router-dom'


function Tv() {
    const [isTvshows, setTvShows] = useState({})
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/routes/api/tvshows')
            .then((response) => {
                setTvShows(response.data)
                setLoading(false)
            })
    }, [])
    return (
        <>
            <div className=' bg-black text-white pl-10'>
                <div className='flex items-center justify-between  pt-10'>
                    <div className='flex items-center '>
                        <WhatshotIcon className='text-yellow-700' />
                        <p className='font-bold text-2xl'>Popular Shows</p>
                    </div>
                    <div className='  mr-10 border-2 rounded-lg w-20 text-center  '>
                        <Link to='/tvshows' className='cursor-pointer'><p className='text-white'>See All</p></Link>
                    </div>
                </div>

                <div className='flex gap-10 flex-wrap h-96 overflow-hidden  sm:justify-around'>
                    {
                        !isLoading ? <>
                            {
                                isTvshows.results.slice(0, 7).map((shows) => {
                                    let vote_average = shows.vote_average.toString().slice(0, 4)
                                    return (

                                        <>
                                            <Link to={`/details/${shows.id}`}>
                                                <div className='w-40 pt-5 overflow-hidden text-white' key={shows.id} >
                                                    <img className='w-40 hover:scale-105  transition-all delay-150 cursor-pointer rounded-lg hover:opacity-55 border-2 ' src={`https://image.tmdb.org/t/p/original/${shows.poster_path}`} alt="movie-cover" />
                                                    <p className='font-bold  mt-3'>{shows.name}</p>
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

export default Tv