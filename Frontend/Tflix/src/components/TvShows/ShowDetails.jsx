import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Tvtrailers from './Tvtrailer';
function ShowDetails() {
  
  const [isDetails, setDetails] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isCast, setCast] = useState({})
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/routes/api/tvdetails/${id}`)
      .then((response) => {
        setDetails(response.data)
        setCast(response.data.credits.cast)
        setLoading(false)
        console.log(isCast)

      });
  }, [])


  return (
    <>
      <div className='bg-[#1e293b] '>
        <Link clasNames="" to='/tvshows'>
          <button type="button" className=" flex items-center justify-center w-30 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white  ml-10 rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
            <svg clasNames="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            <span >Go back</span>
          </button>
        </Link>
        <div className=' flex mt-6  justify-center sm:flex-col  gap-10 items-center bg-[#1e293b] text-white p-5'
          // style={{backgroundImage:  `url("https://image.tmdb.org/t/p/original/${isDetails.backdrop_path}")`,
          //       backgroundPosition: 'center',
          //       backgroundColor: '',
          //       backgroundSize: 'cover',
          //       backgroundRepeat: 'no-repeat',
          //       bachgroundColor: 'gray',
          //       opacity: '0.6'
         
          // }} 
         >

          <div className=''>
            <img className=' rounded-md w-72 ' src={`https://image.tmdb.org/t/p/original/${isDetails.poster_path}`} alt="poster" />
          </div>
          <div className='flex flex-col gap-3 sm:p-10 pl-10 '>
            <h3 className='text-3xl font-bold '>{isDetails.title}</h3>
            <div className='flex h-fit gap-1'>
              {
                !isLoading ? <>
                  {isDetails.genres.map((genre) => {
                    return (
                      <>
                        <p className='border-2 border-white text-sm text-center w-20 rounded-lg'>{genre.name}</p>
                      </>
                    )
                  })}
                </> : ""
              }
            </div>
            <p className='text-inherit w-80'>{isDetails.overview}</p>
            <div className=''>
              <p className='p-2 mb-5 text-2xl font-bold opacity-100'>Top Cast</p>
              {
                !isLoading ? <>
                  <div className='flex w-96 flex-wrap gap-5 h-32 overflow-hidden'>
                    {
                      isCast.slice(0, 6).map((cast) => {
                        return (
                          <>
                            <div className='flex flex-col gap-2 w-28 items-center text-center'>
                              <img className='w-16 rounded-full' src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt="" />
                              <p>{cast.name}</p>
                            </div>
                          </>
                        )
                      })
                    }
                  </div>
                </> : ""
              }
            </div>
          </div>
        </div>
        <Tvtrailers />
      </div>
    </>
  )
}

export default ShowDetails;