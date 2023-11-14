import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = ({title,image}) => {
  return (
    <div className='flex w-full justify-center items-center pt-52 px-44 bg-white'>
        <div className='flex flex-col px-32'>
            <h1 className='font-bold text-4xl '>{title}</h1>
            <p>Next.js ek React ke adharit open-source web framework hai, jo server-rendered aur statically generated web applications banane mein madad karta hai. Agar Next.js ka naya version aaya hai (jaise ki 13), to isme kuch naye gun aur sudhar hote hain. In naye gunon aur sudharon ko samajhne ke liye aap Next.js ke GitHub repository, documentation, ya official blog ko refer kar sakte hain.</p>

            <Link href='/movie'>
            <button className='px-2 bg-black text-white rounded-full'>Explore</button>
            </Link>
        </div>
        <div className='flex flex-col'>
            <Image src={image} height={1000} width={1000}/>
        </div>
    </div>
  )
}

export default HeroSection