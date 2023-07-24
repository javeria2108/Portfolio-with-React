import React from 'react'
import LogoJ from '../assets/images/logo-j.png'
const Navbar = () => {
  return (
    <div >
        <navbar className='flex flex-row justify-between h-20 sm:h-28 w-full bg-navbar '>

            <img src={LogoJ} alt='logo' className='ml-5 max-w-48 w-36 h-28 sm:w-44 sm:h-36'></img>
        </navbar>

    </div>
  )
}

export default Navbar