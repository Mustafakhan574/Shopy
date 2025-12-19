import React from 'react'

const Contact = () => {
  return (
    <div className=' flex flex-col justify-center items-center'>
       <form action="https://formspree.io/f/xeoyyard" className='flex flex-col w-[80%] gap-3 border p-4 h-[500px] rounded-3xl 'method='POST'>
        <h1 className='text-center text-[40px] font-bold'>Contact Us</h1>
        <input type="text" placeholder='enter your name' className='border p-3 rounded-3xl text-3xl'/>
        <input type="email" placeholder='enter email' className='border p-3 rounded-3xl text-3xl'/>
        <textarea name="message" placeholder='message' className='border p-3 rounded-3xl text-3xl'></textarea>
        <button className='border p-3 rounded-3xl text-3xl active:bg-[aqua]'>Submit</button>
       </form>
    </div>
  )
}

export default Contact