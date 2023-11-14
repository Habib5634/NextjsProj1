import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full flex justify-between px-14 shadow-lg mb-6 bg-white text-black py-3'>
        <div>
            <h1>Logo</h1>
        </div>
        <div className='flex'>
            <ul className='flex justify-between space-x-6'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/movie'>Movie</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
             
        </div>

    </header>
  )
}

export default Header