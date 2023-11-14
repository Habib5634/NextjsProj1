import Image from 'next/image'
import Link from 'next/link'


const MovieCard = (curElem) => {

    const {id, type ,title, synopsis }= curElem.jawSummary
    // console.log(id)
  return (
    <>
    <div className='flex flex-col w-1/6 mx-10 rounded-xl border  justify-between p-1 ' key={id}>
        <Image src={curElem.jawSummary.backgroundImage.url} className='rounded-md mb-3' alt={title} width={250} height={200}/>
        <h2 className='text-2xl font-semibold mb-2'>{title.substring(0,18)}</h2>
        <p className='mb-2'>{`${synopsis.substring(0,60)} ...`}</p>
        <Link href={`/movie/${id}`}>
            <button className='rounded-full mb-2 px-3 py-1 bg-black text-white '>Read More</button>
        </Link>

    </div>

    
    </>
  )
}

export default MovieCard