import React from 'react'

export default function Contact() {
  return (
    <div className='bg-[url(/homeGalaxzy.jpg)] bg-cover bg-center bg-no-repeat  text-white md:h-screen sm:h-[1000px] pt-24 px-24' >
    <h1 className='text-4xl'>
       Get in Touch with AfriqueCine
    </h1>

    <p>
We&apos;d love to hear from you! Whether you&apos;re a filmmaker, industry professional, or simply a fan of African cinema, we want to connect with you.

Fill out the form below and we&apos;ll get back to you shortly.
    </p>
    
    <form>
      <fieldset>
    <ul>
      <li>
      <label for='name'>FullName</label>
      <input className='outline-dashed mt-4 text-black ml-3 text-sm' placeholder='enter your Fullname'  type='text' name='name' id='fullname'/>
      </li>

      <li>
      <label for='email'>Email</label>
      <input className='outline-dashed mt-4 text-black ml-3 text-sm' placeholder='enter your email'  type='email' name='email' id='email'/>
      </li>

      <li>
    <label for='phone'>Phone Number</label>
    <input className='outline-dashed mt-4 ml-3 pr-6 text-center text-black text-sm' placeholder='enter your phone number' type='tel' name='phone-number' id='phone-number'/>
      </li>

      <li className='text-2xl'>
    <label for='message'>Message</label>
    <input className='outline-dashed mt-4 h-72 w-4/5 ml-3 text-center text-black text-sm' placeholder='send us a message'  type='text' name='message' id='message'/>
      </li>
    </ul>
    </fieldset>
    </form>

    </div>
  )
}
