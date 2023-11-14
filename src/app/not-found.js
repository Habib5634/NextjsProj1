import Link from 'next/link'
import React from 'react'

const notfound = () => {
  return (
    <div className='flex flex-col justify-start items-center space-y-6'>
        <h1>404</h1>
        <h1>Not Found</h1>
        <p>Could Not Find Request resourcce</p>
        <Link href='/'>
        <button className='py-2 px-5 bg-black text-white'>Go to home Page</button>
        </Link>
    </div>
  )
}

export default notfound