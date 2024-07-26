
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';


const Movies = () => {

    const [currentImage, setCurrentImage] = useState('https://www.themoviedb.org/t/p/w1280/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg');

    const Images = [
        'https://www.themoviedb.org/t/p/w1280/9VRDZbTg9eAfY7ZqMyU1fbq897W.jpg',
        'https://www.themoviedb.org/t/p/w1280/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg',
        'https://www.themoviedb.org/t/p/w1280/q719jXXEzOoYaps6babgKnONONX.jpg',
        'https://www.themoviedb.org/t/p/w1280/q7aKVu8WVk4jGvGjorBINoe8Kro.jpg',
        'https://www.themoviedb.org/t/p/w1280/3daOEMQCOGU2n9EbUC0PICnUCek.jpg',
        'https://www.themoviedb.org/t/p/w1280/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg'


    ]


    useEffect(() => {
        setInterval(() => {
            let rnd = Images[Math.floor(Math.random(Images) * Images.length)];
            setCurrentImage(rnd)
            console.log(rnd)
        }, 1000000)
    }, [])


    return (
        <>
            <div className='relative z-0'>
                <form className='bg-[#1e293b] pb-5' action="">
                    <div className=' flex items-center justify-center  text-white '>
                        <SearchIcon className='relative left-10' />
                        <input className='bg-[#5a6472] w-11/12 h-12 rounded-md pl-10 outline-none' type="text" placeholder='Search Movies' />
                    </div>
                </form>
                <div className='w-11/12  border-2 border-red-900 overflew-hidden m-auto mt-5'>
                    <img className='w-full h-96 sm:h-full object-cover' src={currentImage} alt="" />
                </div>
        

                <div className='pl-10 bg-black text-white'>
                    <div className='flex items-center mt-5 pt-5 '>
                        <WhatshotIcon className='text-yellow-700' />
                        <p className='font-bold text-2xl'>Trending</p>
                    </div>

                    <div className='flex gap-10 flex-wrap p-2'>
                        <div className='w-40 pt-5'>
                            <img className='w-40 ' src='https://www.themoviedb.org/t/p/w1280/9VRDZbTg9eAfY7ZqMyU1fbq897W.jpg' alt="movie-cover" />
                            <p className='font-bold'>Bad Boys</p>
                            <div className='flex items-center  justify-between'>
                                <p>2024</p>
                                <p className='mr-3'>⭐️ 4.6</p>
                            </div>
                        </div>

                      
                    </div>

           



                </div>

            </div>
        </>
    )
}


export default Movies