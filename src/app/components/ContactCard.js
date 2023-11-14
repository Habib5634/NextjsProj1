import Link from 'next/link'
import React from 'react'
import {MdEmail} from 'react-icons/md'
import {BsArrowRight} from 'react-icons/bs'
const ContactCard = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-col w-2/6 justify-center items-center border p-5'>
            <i ><MdEmail className='text-red-500 text-3xl mb-2'/></i>
            <h1 className='text-2cl font-semibold mb-4'>Email</h1>
            <p className='mb-4 text-gray-700'>Monday to fridat</p>
            <p className='mb-4 text-gray-700'>responsse time 72 hours</p>
            <Link href='/' className='text-gray-500 mb-2 cursor-pointer hover:text-gray-900 flex items-center'>Send Email <BsArrowRight/></Link>
        </div>
    </div>
  )
}

export default ContactCard