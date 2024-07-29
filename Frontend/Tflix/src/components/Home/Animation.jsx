import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AnimationIcon from '@mui/icons-material/Animation';
import { Link } from 'react-router-dom'

function Animation() {

    const [isanimation, setAnimation] = useState({})
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/routes/api/animation')
            .then((response) => {
                setAnimation(response.data)
                setLoading(false)
            })
    }, [])
    return (
        <>
            <div className=' bg-black text-white pl-10 '>
                <div className='flex items-center justify-between  pt-10'>
                    <div className='flex items-center '>
                        <AnimationIcon className='text-yellow-700' />
                        <p className='font-bold text-2xl'>Animated Series</p>
                    </div>
                </div>

                <div className='flex gap-10 flex-wrap h-96 overflow-hidden  sm:justify-around'>
                    {
                        !isLoading ? <>
                            {
                                isanimation.results.slice(0, 7).map((animated) => {
                                    let vote_average = animated.vote_average.toString().slice(0, 4)
                                    return (

                                        <>
                                            <Link to={`/details/${animated.id}`}>

                                                <div className='w-40 pt-5 overflow-hidden' key={animated.id} >
                                                    <img className='w-40 hover:scale-105  transition-all delay-150 cursor-pointer rounded-lg hover:opacity-55 border-2 ' src={`https://image.tmdb.org/t/p/original/${animated.poster_path}`} alt="movie-cover" />
                                                    <p className='font-bold  mt-3'>{animated.title}</p>
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

export default Animation