import { socialMediaReach, updateableLinks } from "@/data/website";
import Image from "next/image";
import getSubscriberCount from "@/app/files/getSubscriberCount";
import HomeSocialSection from "@/sections/HomeSocialSection";
import HomeCarousel from "@/sections/HomeCarousel";
import React, { MouseEventHandler } from 'react';
import HeroVideo from "./components/HeroVideo";
import Reveal from "./components/Reveal";

export default function Home() {

  return (
    <main className="w-full text-black">
      <HeroVideo/>
      <section id="latest_content">
        <div className="w-full bg-blue-400 md:py-10 py-6 flex flex-col justify-center items-center gap-4 md:gap-8">
          <Reveal><h3 className="text-2xl md:text-3xl font-bold">Latest from GSPH</h3></Reveal>
          <Reveal>
            <div className="w-full flex justify-center items-center">
              <iframe width="560" height="315" src={updateableLinks.latestVideo} className='md:rounded-2xl rounded-lg md:w-[560px] md:h-[315px] w-[398px] h-[223px]' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

              </iframe>
            </div>
          </Reveal>
        </div>
      </section>
      <section id="social_media_reach">
        <div className="w-full bg-pink-400 md:py-10 py-6 flex flex-col justify-center items-center gap-4 md:gap-8">
          <Reveal><h3 className="text-2xl md:text-3xl font-bold">Our Social Media Reach</h3></Reveal>
          <HomeSocialSection/>
        </div>
      </section>
      <section id='featured'>
        <div className="w-full bg-green-400 md:py-10 py-6 flex flex-col justify-center items-center gap-4 md:gap-8 overflow-hidden">
          <Reveal><h3 className="text-2xl md:text-3xl font-bold">Featured from GSPH</h3></Reveal>
          <HomeCarousel/>
        </div>
      </section>
    </main>
  );
}