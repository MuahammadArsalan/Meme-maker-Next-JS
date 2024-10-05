"use client"

// import { error } from 'console';
// import { waitForDebugger } from 'inspector';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

const createMeme = (props: {searchParams :{ url:string; id:string ; boxCount:string;}}) => {
// console.log(props.searchParams);

interface image{
  src:string;
  url : string;
  alt: string;
  width: number
  height: number
}



  // console.log(props.searchParams.url)
  // console.log(props.searchParams.id)
  // console.log(props.searchParams.boxCount)
  
  const text1 = useRef<HTMLInputElement>(null)
  const text2 = useRef<HTMLInputElement>(null)
  const text3 = useRef<HTMLInputElement>(null)
  const text4 = useRef<HTMLInputElement>(null)
// console.log(props)

let [result,setResult] =useState('')
let [Submit,setSubmit] =useState('Submit')

const getTxts = async(e:React.SyntheticEvent) => {
  e.preventDefault()
  setSubmit('Creating..')

// console.log(text1.current?.value);
// console.log(text2.current?.value);
// console.log(text3.current?.value);
// console.log(text4.current?.value);



let data = await fetch(`
https://api.imgflip.com/caption_image?template_id=${props.searchParams.id}&username=marsalan2037&password=abcqwe123456789&text0=${text1.current?.value}&text1=${text2.current?.value}&text2=${text3.current?.value}&text3=${text4.current?.value}`,{
  method:'POST'
})

let response = await data.json();
// console.log(response.data)

if (response.success) {
  setResult(response.data)
  setSubmit('Submit')
}else{
  
  alert('Error !' + response.error_message)
  setSubmit('Submit')
}




if(text1.current) {
  text1.current.value = ''
  
}
if(text2.current){
  
  text2.current.value = ''
}
  
  
if(text3.current) {
  text3.current.value = ''

}if(text4.current) {
  text4.current.value = ''

}

}


  return (

    <>
    <div className='flex flex-wrap justify-around align-start '>

    <div className='text-center font-bold text-5xl m-5'>Create Meme <Link href={'/'}><button className='btn btn-primary'>All Templates</button></Link></div>

    </div>


<form onSubmit={getTxts} className='flex-wrap justify-around'>
<div className='w-[40vw] text-center m-auto'>

<label className="input input-bordered flex items-center gap-2">
  
  <input type="text" className="grow" ref={text1} placeholder="text1" />
</label>
<br /><br />

<label className="input input-bordered flex items-center gap-2">
  
  <input type="text" className="grow"ref={text2} placeholder="text2" />
</label>
<br /><br />


<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" ref={text3} placeholder="text3" />
</label>
<br /><br />


<label className="input input-bordered flex items-center gap-2">
  <input ref={text4} type="text" className="grow" placeholder="text4" />
</label>

<button type='submit' className='btn btn-primary m-5' >{Submit}</button>

</div>
</form>
<div className=''>

<img width={250} className='m-auto' height={250} src={props.searchParams.url} alt="meme_image " />
</div>

<div className='m-5'>

 {result ? 
 <Image className='m-auto' src={result.url} width={250} height={250} alt="meme"/> : null} 
</div>


    </>
  )
}

export default createMeme