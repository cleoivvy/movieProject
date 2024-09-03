import React from 'react'

export default function Page() {
  return (
    
    <div className="flex justify-around capitalize items-center h-[1000px]
          bg-[url(/homeGalaxzy.jpg)] bg-cover text-white text-lg">
          
        <div className="flex flex-col gap-10 pt-2 p-4 capitalize  h-screen
          text-white text-lg">
          
        <h1 className='text-2xl font-awesome '>
        Welcome to AfriqueCine
        </h1>

<p>

AfriqueCine is your premier destination for all things African cinema. We are a community of film enthusiasts dedicated to celebrating and critiquing the best of African movies. Our mission is to promote African storytelling, showcase emerging talent, and provide a platform for fans to engage with the films they love.
</p>

<p className='text-2xl'>
Our Story
</p>

<p>

AfrriqueCine was founded in 2024 by a passionate film lover who recognized the need for a dedicated space to discuss and review African movies. With the continent's film industry experiencing unprecedented growth, we saw an opportunity to create a hub where fans could discover new films, share their opinions, and connect with like-minded individuals.
</p>


<div className='bg-[url(/me.jpeg)] bg-contain bg-no-repeat flex'>
<p className='text-2xl'>
Our Founder
</p>
<p>
Meet  dedicated writer, critic, and film enthusiast who brings her expertise and passion to AfriqueCine.
- Ojobo Clara, Founder & Editor-in-Chief
- Ojobo Clara, Lead Writer & Critic
- Ojobo Clara, Community Manager

</p>   
</div>
    </div>
    </div>
  )
}
