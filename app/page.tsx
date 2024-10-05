// "use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { url } from 'inspector'
import Btn from './Components/Btn'

 async function page() {
  //  const [memes,setMemes]= useState([])

interface Memes{
  id: string
  name: string
  url: string
  box_count: number
}


    
    let data =await fetch('https://api.imgflip.com/get_memes')
    let response =  await data.json()
    let memeArr = response.data.memes
    // console.log(memeArr)
  
    


  return (
  <>
  
  <h1 className='text-center m-5 font-bold text-5xl ' >Meme Templates</h1>
  

  <div className='flex flex-wrap justify-center align-middle gap-6'>



   {memeArr.map(( item : Memes)=>{

    return <div  key={item.id} className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={item.url}
      alt="memeImage"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <p>{item.name}</p>
    <div className="card-actions">

    <button className="btn btn-primary"><Link href={{
      pathname:'/createMeme',
      query:{
        Url:item.url,
        id:item.id,
        boxCount:item.box_count
      }
    }}>
    
    
    Generate Memes</Link></button>



{/* <button>


  <Link href={{
    pathname:"/createMeme",
    query:{
      // url:item.url,
      id:item.id,
      boxCount:item.box_count
    }
  }}><Btn title={'Generate Meme'}/>  </Link>
  </button> */}

    </div>
  </div>
</div>



  })} 
</div>

  
  </>
  )
}

export default page