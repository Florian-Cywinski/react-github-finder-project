import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title = 'Github Finder' }) {
    return (
      <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>  {/* navbar is a class from daisyUI */}
        <div className='container mx-auto'> {/* To don't have the Navbar until the left / right end */}
          {/* Left side */}
          <div className='flex-none px-2 mx-2'> {/* flex-none to prevent a flex item from growing or shrinking */}
            <FaGithub className='inline pr-2 text-3xl' />   {/* import { FaGithub } from 'react-icons/fa' */}
            <Link to='/' className='text-lg font-bold align-middle'>{title}</Link>  {/* Github Finder (text) */}
          </div>
          {/* Right side */}  
          <div className='flex-1 px-2 mx-2'>
            <div className='flex justify-end'>
              <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>Home</Link> {/* import { Link } from 'react-router-dom' */}
              <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>About</Link>   {/* btn is a class from daisyUI (https://daisyui.com/components/button/) */}
            </div>
          </div>
        </div>
      </nav>
    )
}

// Navbar.defaultProps = {
//     title: 'Github Finder',
//   }
  
Navbar.propTypes = {
title: PropTypes.string,
}

export default Navbar