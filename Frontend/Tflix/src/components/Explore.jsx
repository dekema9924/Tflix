
import React from 'react'
import { Link } from 'react-router-dom'

function Explore() {
  return (
   <>
     <div className=' bg-gray-500 h-screen text-white'>
        <div className=' w-50 h-40 bg-white text-black flex flex-col justify-center items-center'>
                <h1>Page Under Construction</h1>
                <p className='text-sm font-thin pb-3'>please come back at a later time</p>
                <Link className='bg-blue-600 rounded-lg w-40 h-10 text-center pt-2 text-white' to={'/'}>Go Back</Link>
            </div>
     </div>
   </>
  )
}

export default Explore