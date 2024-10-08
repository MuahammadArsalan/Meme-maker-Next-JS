// "use client"
import Link from 'next/link'
import Btn from './Components/Btn'
import Image from 'next/image'
import {  } from 'react'

 async function page() {
  //  const [memes,setMemes]= useState([])

interface Memes{
  id: string
  name: string
  url: string
  box_count: string
}


    
    const  data =await fetch('https://api.imgflip.com/get_memes')
    const response =  await data.json()
    const  memeArr = response.data.memes
    // console.log(memeArr)


  return (
  <>
  
  <h1 className='text-center m-5 font-bold text-5xl ' >Meme Templates</h1>
  

  <div className='flex flex-wrap justify-center align-middle gap-6'>



   {memeArr.map(( item : Memes)=>{

    return <div  key={item.id} className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    < Image src={item.url} className='rounded-xl' width={200} height={200} alt='memeImage'/>
  </figure>
  <div className="card-body items-center text-center">
    <p>{item.name}</p>
    <div className="card-actions">
  <Link href={{
    pathname:"/createMeme",
    query:{
      url:item.url,
      id:item.id,
      boxCount:item.box_count
    }
  }}><Btn title={'Generate Meme'}/></Link>
  

    </div>
  </div>
</div>



  })} 
</div>

  
  </>
  )
}

export default page