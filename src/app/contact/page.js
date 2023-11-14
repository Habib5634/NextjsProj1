import React from 'react'
import ContactCard from '../components/ContactCard'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
    <ContactCard/>
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text=gray-700 text-xl my-5'>We'd love to hear <span className='text-red-500'>from you</span></h2>
      <ContactForm/>
    </div>
    </>
  )
}

export default Contact