import Image from 'next/image';
import React from 'react'

const page = async ({params}) => {
  const id = params.id
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f2aa1568fbmsh56961f62199545bp195d85jsnc7d5a4f90446',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url,options);

  const data = await res.json();
  // console.log(data)
  const main_data = data[0].details;
  // console.log(main_data)
  return (
    <div className='flex justify-center'>
    <div className='flex flex-col justify-center items-start w-1/2 pt-24 px-'>
      <h2 className='self-start text-start text-3xl mb-10 text-red-500 font-bold'>Netflix \  <span className='text-gray-500'>{main_data.type}</span></h2>
    <div className='flex flex-col w-full  rounded-xl  h-[25rem] justify-between p-1 ' key={id}>
    <Image src={main_data.backgroundImage.url} className='rounded-md mb-5' alt={main_data.title} width={500} height={400}/>
    <h2 className='text-4xl font-bold mb-5'>{main_data.title}</h2>
    <p className='mb-2'>{main_data.synopsis}</p>
    </div>

</div>
</div>
  )
}

export default page