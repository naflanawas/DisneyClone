import React,{useState} from 'react'
import logo from '../assets/images/logo.png'
import { HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";

import HeaderItem from './HeaderItem';

function Header() {
  // react hooks,use state
  const [toggle,setToggle]=useState(false);
  const menu=[
   {
    name:'HOME',
   icon: HiHome
  },
  {
    name:'SEARCH',
    icon: HiMagnifyingGlass
  },
  {
  name:'WATCHLIST',
  icon: HiStar
  },
  {
  name:'ORIGINALS',
  icon:HiPlayCircle
  },
  {
  name:'MOVIES',
  icon:HiPlus
  },
  {
  name:'SERIES',
  icon:HiTv
  }
 ]
  return (
    <div className='flex items-center gap-128 justify-between p-5'>
      <div className='flex gap-8 items-center'>
      {/* if you want to create custom css,then use [] brackets in tailwind css */}
      <img src={logo} className='w-[80px] md:w-[115px] object-cover'/> 
      {/* we should iterate the header menu to get the menu items structure. */}
      {/* responsive navigation */}
      <div className='hidden md:flex gap-8'>
      {menu.map((item, index)=>(
        <HeaderItem key={index} name={item.name} Icon={item.icon}/>
      ))}
      </div>
      <div className='flex  md:hidden gap-5'>
      {menu.map((item, index)=>index <3&&(
        <HeaderItem key={index} name={""} Icon={item.icon}/>
      ))}
      
      <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
      <HeaderItem name='' Icon={HiDotsVertical}/>
      {/* if toggle is true then show this or else nothing */}
      {toggle?<div className='absolute mt-3 bg-[#121212] border-[1px]  border-gray-700 p-3 px-5 py-4'>
      {menu.map((item, index)=>index>2&&(
        <HeaderItem key={index} name={item.name} Icon={item.icon}/>
      ))}
      </div>:null}
      </div>
   </div>
   </div>
      <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' className='w-[40px] rounded-full'/>
  </div>
  )
}

export default Header


//jsx element <.../> as prop possible,same thing cant use as component in react