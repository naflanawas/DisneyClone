import React from 'react'
import logo from '../assets/images/logo.png'
import { HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";

import HeaderItem from './HeaderItem';

function Header() {
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
      {menu.map((item, index)=>(
        <HeaderItem key={index} name={item.name} Icon={item.icon}/>
      ))}
      </div>
      <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header


//jsx element <.../> as prop possible,same thing cant use as component in react