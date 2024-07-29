
import React, { useEffect, useState } from 'react'
import Tv from './Tv';
import Movies from './Movies';
import Animation from './Animation';


const Home = () => {
    

    const [currentImage, setCurrentImage] = useState('https://www.themoviedb.org/t/p/w1280/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg');
    const Images = [
        'https://www.themoviedb.org/t/p/w1280/9VRDZbTg9eAfY7ZqMyU1fbq897W.jpg',
        'https://www.themoviedb.org/t/p/w1280/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg',
        'https://www.themoviedb.org/t/p/w1280/q719jXXEzOoYaps6babgKnONONX.jpg',
        'https://www.themoviedb.org/t/p/w1280/q7aKVu8WVk4jGvGjorBINoe8Kro.jpg',
        'https://www.themoviedb.org/t/p/w1280/3daOEMQCOGU2n9EbUC0PICnUCek.jpg',
        'https://www.themoviedb.org/t/p/w1280/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg'
    ]



    //set imageSlider
    useEffect(() => {
        setInterval(() => {
            let rnd = Images[Math.floor(Math.random(Images) * Images.length)];
            setCurrentImage(rnd)
            console.log(rnd)
        }, 10000)
    }, [])


    return (
        <>
            <div className='relative z-0 '>
                <div className='w-11/12   overflew-hidden m-auto mt-5'>
                    <img className='w-full h-96 sm:h-full object-cover' src={currentImage} alt="" />
                </div>

                <Movies/>
                <Tv/>
                <Animation/>


            </div>
        </>
    )
}


export default Home