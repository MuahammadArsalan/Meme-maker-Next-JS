"use client"

import "@/app/createMeme/a.css"
import Image from 'next/image';
import Link from 'next/link';
import React, {  useRef, useState } from 'react'

interface image{
  success: boolean;
  data:{
    url:string;
    id:string;
    boxCount:number
  }
  
  error_message?:string
}

const CreateMeme = (props: {searchParams :{url:string ; id:string; boxCount:number}}) => {




  // console.log(props.searchParams.url)
  // console.log(props.searchParams.id)

  // console.log(props.searchParams.boxCount)
  
  const text1 = useRef<HTMLInputElement>(null)
  const text2 = useRef<HTMLInputElement>(null)
  const text3 = useRef<HTMLInputElement>(null)
  const text4 = useRef<HTMLInputElement>(null)
  const text5 = useRef<HTMLInputElement>(null)
  const text6 = useRef<HTMLInputElement>(null)
// console.log(props.searchParams)

const  [result,setResult] = useState<image | null>(null)
const  [Submit,setSubmit] =  useState<string>('Submit')


const getTxts = async(e:React.SyntheticEvent) => {
  e.preventDefault()
  setSubmit('Creating..')
  
  // console.log(text1.current?.value);
  // console.log(text2.current?.value);
// console.log(text3.current?.value);
// console.log(text4.current?.value);



const data = await fetch(`
https://api.imgflip.com/caption_image?template_id=${props.searchParams.id}&username=marsalan2037&password=abcqwe123456789&text0=${text1.current?.value}&text1=${text2.current?.value}&text2=${text3.current?.value}&text3=${text4.current?.value}&text4=${text5.current?.value}&text5=${text6.current?.value}`,{
  method:'POST'
})

const response = await data.json();
// console.log(response)

if (response.success) {
  setResult(response)
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
  
  
}if(text5.current) {
  text5.current.value = ''
  
}
if(text6.current) {
  text6.current.value = ''
  
}

}

// let input = () => {
//   let boxInp : JSX.Element[] = [] 

//   for(let i=0 ; i < props.searchParams.boxCount; i++){
// boxInp.push(
// <label >
//     <input type="text" className="grow" ref={text1} placeholder="text1" />
//   </label>
// )
//   }

// }




return (
  
    <>
    <div className='flex flex-wrap justify-around align-start '>

    <div className='text-center font-bold text-5xl m-5'>Create Meme <Link href={'/'}><button className='btn btn-primary'>All Templates</button></Link></div>

    </div>


<form onSubmit={getTxts} className='flex-wrap justify-around'>
<div className='w-[40vw] text-center m-auto'>
<h1 className='text-center font-bold my-3'>Fill only  <span className='text-3xl t'> {props.searchParams.boxCount}</span> Feilds To create meme!</h1>

<label className="input input-bordered flex items-center gap-2">
  
  <input type="text" className="grow" ref={text1} placeholder="text1" />
</label>
<br />

<label className="input input-bordered flex items-center gap-2">
  
  <input type="text" className="grow"ref={text2} placeholder="text2" />
</label>
<br />


<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" ref={text3} placeholder="text3" />
</label>
<br />


<label className="input input-bordered flex items-center gap-2">
  <input ref={text4} type="text" className="grow" placeholder="text4" />
</label>
<br />
<label className="input input-bordered flex items-center gap-2">
  <input ref={text5} type="text" className="grow" placeholder="text5" />
</label>
<br />

<label className="input input-bordered flex items-center gap-2">
  <input ref={text6} type="text" className="grow" placeholder="text6" />
</label>
<br />

<button type='submit' className='btn btn-primary m-5' >{Submit}</button>

</div>
</form>
<div className=''>



  {result ?
    <Image className='m-auto' src={result.data.url} width={330} height={300} alt="meme"/> : 
  <Image width={330}  className='m-auto' height={300} src={props.searchParams.url} alt="meme_image "/> 
  
 
}


</div>





    </>
  )
}

export default CreateMeme