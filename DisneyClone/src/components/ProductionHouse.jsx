import React from 'react'
import disney from '../assets/images/disney.png'
import pixar from '../assets/images/pixar.png'
import marvel from '../assets/images/marvel.png'
import starwars from '../assets/images/starwar.png'
import national from '../assets/images/nationalG.png'

import disneyV from '../assets/videos/disney.mp4'
import pixarV from '../assets/videos/pixar.mp4'
import marvelV from '../assets/videos/marvel.mp4'
import starwarsV from '../assets/videos/starwars.mp4'
import nationalV from '../assets/videos/nationalgeographic.mp4'



function ProductionHouse() {
    const ProductionHouseList=[
        {
            id:1,
            name:'Disney',
            image:disney,
            video:disneyV
        },
        {
            id:2,
            name:'Pixar',
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            name:'Marvel',
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            name:'Star Wars',
            image:starwars,
            video:starwarsV
        },
        {
            id:5,
            name:'National Geographic',
            image:national,
            video:nationalV
        }
    ]
return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
        {/* //need to iterate over the setMovieList */}
        {ProductionHouseList.map((item) => (
            <div key={item.id} className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800'>
                <img src={item.image} alt={item.name} className='w-full z-[1]' />
                <video src={item.video} autoPlay loop playsInline className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'/>
            </div>
        ))}
    </div>
)
}

export default ProductionHouse