import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-purple-400 w-full py-4 px-6  flex items-center gap-4 '>
        <div>
            <h1 className='text-white  text-2xl'>Study Point</h1>
        </div>
        <div>
            <Link to={'add'} className='text-white font-semibold text-lg ml-4 '> Add Member</Link>
            {/* <Link to={'new'} className='text-white  text-lg ml-4 '> Addr</Link> */}
            <Link to={'all'} className='text-white  text-lg ml-4 '> All Member</Link>


        </div>
      
    </nav>
  )
}

export default Navbar
