import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
import HdSharpIcon from '@mui/icons-material/HdSharp';
import { Box } from '@mui/material';

function Trailers() {
    const [isTrailer, setTrailer] = useState({})
    const [isLoading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/routes/api/trailer/${id}`)
            .then((response) => {
                console.log(response.data.results)
                setLoading(false)
                setTrailer(response.data.results)
            })
    }, [])

    return (
        <>
        <div className='flex items-center justify-center  m-5 p-5 gap-5'>
             <Box className='border-2'><HdSharpIcon className='text-white text-5xl '/></Box>
             <p className='font-bold text-4xl  text-white w-fit'>Trailers</p>
        </div>
            <div className=' flex items-center flex-wrap justify-center gap-5'>
                {
                    !isLoading ? <>
                        {
                            isTrailer.slice(0, 2).map((trailers) => {
                                return (
                                    <>
                                        <div>
                                            <iframe allow='autoplay; encrypted-media'
                                                 width="453" height="280" 
                                                 frameborder="0"
                                                 allowfullscreen ng-show="showvideo"
                                                src={`https://www.youtube.com/embed/${trailers.key}`}/>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </> : ""
                }
            </div>
        </>
    )
}

export default Trailers