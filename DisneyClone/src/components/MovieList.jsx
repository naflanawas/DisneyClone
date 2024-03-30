import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
// import HrMovieCard from './HrMovieCard';
function MovieList({genreId,index_}) {
// genreId is passed as a prop from GenreMovieList.jsx
//use state is used to store the data in the component
    const [movieList,setMovieList]=useState([])
    const elementRef=useRef(null);

// useEffect is a hook that allows you to perform side effects in function components
// user effect is used to fetch data from api and empty array is passed to avoid infinite loop. 
// we can pass the array of data to fetch data on change of the array data but in this case, there will be no changes in the array so we are passing empty array.
// The second argument of useEffect is an array of dependencies. If any of the dependencies change, the function passed to useEffect will be called.
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }
  return (
    <div className='relative'>
         <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}/>
   
    <div ref={elementRef} className='flex overflow-x-auto gap-8
     scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
        {movieList.map((item,index)=>(
           <>
          {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
           </> 
        ))}
    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
    </div>
  )
}
export default MovieList