import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import LogoJ from '../assets/images/logo-j.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {
  return (
    <div >
        <nav className='flex flex-row items-center justify-between h-16 sm:h-20 w-full '>
            <Link to="/">
            <img src={LogoJ} alt='logo' className='ml-5 max-w-32 max-h-32 sm:max-w-48 sm:max-h-48 '></img>
         
            </Link>
            
            

            <div className='flex flex-row mr-3 sm:mr-8 text:xl
             sm:text-2xl text-tealight '>
              <NavLink exact="true" to="/">
              <FontAwesomeIcon icon={faHome} className="mx-2 
              sm:mx-4 hover:-translate-y-1 hover:scale-110
               hover:text-greybg duration-300 "/>
              </NavLink>
              <AnchorLink href='#about'>
              <FontAwesomeIcon icon={faUser} className='mx-3 sm:mx-4 hover:-translate-y-1 hover:scale-110 hover:text-greybg duration-300 '/>
              </AnchorLink>
              <NavLink exact="true" to="/contact">
              <FontAwesomeIcon icon={faEnvelope} className='mx-3 sm:mx-4 hover:-translate-y-1 hover:scale-110 hover:text-greybg duration-300 '/>
              </NavLink>
             

         
         
             </div>
        </nav>

    </div>
  )
}

export default Navbar