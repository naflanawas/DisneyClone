import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'; //reacticons.io
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"; //baseurl from db
// const screenWidth=window.innerWidth;
function Slider() {
    const [movieList,setMovieList]=useState([]);
    const elementRef=useRef();
    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }

    const sliderRight=(element)=>{
        const imageWidth = element.firstChild.offsetWidth;
         element.scrollLeft += imageWidth;
    }
    const sliderLeft=(element)=>{
        const imageWidth = element.firstChild.offsetWidth;
        element.scrollLeft -= imageWidth;
    }
  return (
    <div>
        <HiChevronLeft className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer " 
        onClick={()=>sliderLeft(elementRef.current)}/>
        
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0'  
        onClick={()=>sliderRight(elementRef.current)}/>

   
    <div className='flex overflow-x-auto max-w-screen w-full px-8 py-2
    scrollbar-hide scroll-smooth' ref={elementRef}> 
        {movieList.map((item, index)=>(
            <img key={index} src={IMAGE_BASE_URL+item.backdrop_path} 
            className='w-full  flex-shrink-0 md:h-[310px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in'/>
        ))}
    </div>
    </div>
  )
}

export default Slider