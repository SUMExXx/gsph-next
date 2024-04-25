import { customColors, SlidingTextData, socialMediaReach, updateableLinks } from "@/data/website";
import Image from "next/image";
import getSubscriberCount from "@/app/utils/getSubscriberCount";
import HomeSocialSection from "@/sections/HomeSocialSection";
import HomeCarousel from "@/sections/HomeCarousel";
import React, { MouseEventHandler } from 'react';
import HeroVideo from "./components/HeroVideo";
import Reveal from "./components/Reveal";
import SlidingText from "./components/SlidingText";

export default function Home() {

  return (
    <main className="w-full text-black">
      <section id='hero_video'>
        <HeroVideo/>
      </section>
      <section>
        <div className="flex justify-center items-center py-10 md:py-[100px] px-10" style={{background: `linear-gradient(to bottom, ${customColors.home[4]}, ${customColors.home[4]})`}}>
          <div className="flex flex-col justify-center items-center gap-8 md:gap-0">
            <Reveal><h1 className="font-black text-[48px] md:text-[120px] animate-text bg-gradient-to-r from-cyan-400 via-purple-600 to-indigo-700 bg-clip-text text-transparent">GS Production House</h1></Reveal>
            <Reveal><SlidingText sentence={SlidingTextData.sentence} texts={SlidingTextData.texts}/></Reveal>
          </div>
        </div>
      </section>
      <section id="latest_content">
        <div className="w-full md:py-10 py-10 flex flex-col justify-center items-center gap-4 md:gap-8" style={{background: `linear-gradient(to bottom, ${customColors.home[0]}, ${customColors.home[1]}), url('/images/doodleback3.png') center center / contain no-repeat`}}>
          <Reveal><h3 className="text-2xl md:text-3xl font-bold" style={{ filter: 'drop-shadow(0 0 7px rgba(255, 255, 255, 0.7))' }}>Latest from GSPH</h3></Reveal>
          <Reveal>
            <div className="w-full flex justify-center items-center">
              <iframe width="560" height="315" src={updateableLinks.latestVideo} className='md:rounded-2xl rounded-lg md:w-[560px] md:h-[315px] w-[398px] h-[223px]' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

              </iframe>
            </div>
          </Reveal>
        </div>
      </section>
      <section id="social_media_reach">
        <div className="w-full bg-gradient-to-b md:py-10 py-10 flex flex-col justify-center items-center gap-4 md:gap-8" style={{background: `linear-gradient(to bottom, ${customColors.home[1]}, ${customColors.home[2]}), url('/images/doodleback4.png') center center / contain no-repeat`}}>
          <Reveal><h3 className="text-2xl md:text-3xl font-bold" style={{ filter: 'drop-shadow(0 0 7px rgba(255, 255, 255, 0.7))' }}>Our Social Media Reach</h3></Reveal>
          <HomeSocialSection/>
        </div>
      </section>
      <section id='featured'>
        <div className="w-full bg-gradient-to-b from-pink-400 to-teal-400 md:py-10 py-10 flex flex-col justify-center items-center gap-4 md:gap-8 overflow-hidden" style={{background: `linear-gradient(to bottom, ${customColors.home[2]}, ${customColors.home[3]}), url('/images/doodleback3.png') center center / contain no-repeat`}}>
          <Reveal><h3 className="text-2xl md:text-3xl font-bold" style={{ filter: 'drop-shadow(0 0 7px rgba(255, 255, 255, 0.7))' }}>Featured from GSPH</h3></Reveal>
          <HomeCarousel/>
        </div>
      </section>
    </main>
  );
}