import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div
      className="flex justify-around capitalize items-center md:h-[1200px] sm:h-[600px] sm:border-solid-[1px] 
          bg-[url(/homeGalaxzy.jpg)]  bg-cover bg-center bg-no-repeat  text-white text-lg px-24 "
    >
      <div
        className="flex flex-col gap-10 pt-2 p-4 capitalize  h-screen
          text-white text-lg"
      >
        <h1 className="text-2xl font-awesome ">Welcome to AfriqueCine</h1>

        <p>
          AfriqueCine is your premier destination for all things African cinema.
          We are a community of film enthusiasts dedicated to celebrating and
          critiquing the best of African movies. Our mission is to promote
          African storytelling, showcase emerging talent, and provide a platform
          for fans to engage with the films they love.
        </p>

        <p className="text-2xl">Our Story</p>

        <p>
          AfrriqueCine was founded in 2024 by a passionate film lover who
          recognized the need for a dedicated space to discuss and review
          African movies. With the continent&apos;s film industry experiencing
          unprecedented growth, we saw an opportunity to create a hub where fans
          could discover new films, share their opinions, and connect with
          like-minded individuals.
        </p>

        <div className="flex-auto"> 
          <p className="text-2xl pb-5">Our Founder</p>
          <p>
            Meet dedicated writer, critic, and film enthusiast who brings her
            expertise and passion to AfriqueCine.
          </p>

          <ul>
            <li>Ojobo Clara, Founder & Editor-in-Chief</li>

            <li>Ojobo Clara, Lead Writer & Critic</li>

            <li>Ojobo Clara, Community Manager</li>
          </ul>
        <Image
          src={"/me.jpeg"}
          alt={"our founder"}
          width={"300"}
          height={"500"}
          className="border-radius object-fit-cover display-block flex relative p-7 margin-0-auto transform rotate-90 ml-auto mb-32 "
          />
          <p>Meet Ojobo Clara</p>
          </div>
      </div>
    </div>
  );
}
