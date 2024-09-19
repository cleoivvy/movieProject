import React from 'react'

export default function Contact() {
  return (
    <div className='bg-[url(/homeGalaxzy.jpg)] bg-cover bg-center bg-no-repeat h-fit text-white pt-24 px-24' >
<section class="max-w-2xl mx-auto p-4 md:p-6 lg:p-8 bg-gray-100 rounded shadow-md">
  <header class="mb-4">
    <h1 class="text-4xl text-gray-800">Get in Touch with AfriqueCine</h1>
    <p class="text-lg text-gray-600">
      We'd love to hear from you! Whether you're a filmmaker, industry professional, or simply a fan of African cinema, we want to connect with you.
      Fill out the form below and we'll get back to you shortly.
    </p>
  </header>
  <div class="contact-form mb-4">
    <form>
      <fieldset>
        <ul>
          <li>
            <label for="name" class="block text-lg text-gray-600 mb-2">FullName</label>
            <input
              className="outline-dashed mt-4 text-black ml-3 text-sm w-full pl-10 border border-gray-300 rounded"
              placeholder="enter your Fullname"
              type="text"
              name="name"
              id="fullname"
            />
          </li>

          <li>
            <label for="email" class="block text-lg text-gray-600 mb-2">Email</label>
            <input
              className="outline-dashed mt-4 text-black ml-3 text-sm w-full pl-10 border border-gray-300 rounded"
              placeholder="enter your email"
              type="email"
              name="email"
              id="email"
            />
          </li>

          <li>
            <label for="phone" class="block text-lg text-gray-600 mb-2">Phone Number</label>
            <input
              className="outline-dashed mt-4 ml-3 pr-6 text-center text-black text-sm w-full pl-10 border border-gray-300 rounded"
              placeholder="enter your phone number"
              type="tel"
              name="phone-number"
              id="phone-number"
            />
          </li>

          <li class="text-2xl">
            <label for="message" class="block text-lg text-gray-600 mb-2">Message</label>
            <p
              className="outline-dashed mt-4 h-32 w-full pl-10 text-center text-black text-sm border border-gray-300 rounded"
              placeholder="send us a message"
              name="message"
              id="message"
            ></p>
          </li>
        </ul>
      </fieldset>
      <button type="submit" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 mt-7 px-4 rounded w-full">Send Message</button>
    </form>
  </div>
</section>
  

    </div>
  )
}
