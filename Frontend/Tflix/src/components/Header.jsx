import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Box from '@mui/material/Box';


const Header =()=>{

    const[isClicked, setClicked] = useState(false);
    

    const HandleActive =()=>{
        setClicked(true)
    }
    const HandleInactive =()=>{
        setClicked(false)
    }

    return(
        <>
            <header className=" flex h-20 items-center text-white w-full justify-between bg-[#1e293b] relative z-50 ">
                <div className='flex ml-10 '>
                    <LocalMoviesIcon className='text-red-500'/>
                    <p>Movies</p>
                </div>
                <ul className="flex gap-7 mr-10 h-8 items-center sm:hidden">
                    <Link  className=' hover:border-2 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-blue-400' to={'/'}>Home</Link>
                    <Link className=' hover:border-2 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-blue-400' to={'explore'}>Explore</Link>
                    <Link className=' hover:border-2 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-blue-400' to={'/movies'}>Movies</Link>
                    <Link className=' hover:border-2 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-blue-400' to={'/tvshows'}>TvShows</Link>
                </ul>
                <div style={{top: !isClicked ? "-990px": "78px"}} className='w-full fixed  h-96 flex pt-20 justify-center transition  delay-200 bg-[#1e293b] '>
                    <ul className="flex flex-col gap-7 mr-10 h-8 items-center transition-all delay-300 ">
                        <Link onClick={HandleInactive} className=' hover:border-2 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-blue-400' to={'/'}>Home</Link>
                        <Link onClick={HandleInactive}  className=' hover:border-2 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-blue-400' to={'/explore'}>Explore</Link>
                        <Link onClick={HandleInactive}  className=' hover:border-2 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-blue-400' to={'/movies'}>Movies</Link>
                        <Link onClick={HandleInactive}  className=' hover:border-2 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-blue-400' to={'/tvshows'}>TvShows</Link>
                    </ul>
                </div>

                
                {!isClicked ? <Box className=' sm:block md:hidden'><MenuIcon onClick={HandleActive} className='cursor-pointer mr-10'/></Box> : <CloseIcon onClick={HandleInactive}  className='cursor-pointer mr-10'/>}

            </header>

        </>
    )
}



export default Header;