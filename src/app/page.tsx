import { socialMediaReach, updateableLinks } from "@/data/website";
import Image from "next/image";
import getSubscriberCount from "@/app/files/getSubscriberCount";
import HomeSocialSection from "@/sections/HomeSocialSection";

export default function Home() {

  return (
    <main className="w-full">
      <section id="intro_video">
        <video autoPlay muted loop preload="metadata" className="w-full object-cover h-[800px]" id='gsph_video'>
          <source src={'/videos/gsph_video.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section id="latest_content">
        <div className="w-full bg-blue-400 md:py-10 py-6 flex flex-col justify-center items-center gap-4 md:gap-8">
          <h3 className="text-2xl md:text-3xl font-bold">Latest from GSPH</h3>
          <div className="w-full flex justify-center items-center">
            <iframe width="560" height="315" src={updateableLinks.latestVideo} className='md:rounded-2xl rounded-lg md:w-[560px] md:h-[315px] w-[398px] h-[223px]' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

            </iframe>
          </div>
        </div>
      </section>
      <section id="social_media_reach">
        <div className="w-full bg-pink-400 md:py-10 py-6 flex flex-col justify-center items-center gap-4 md:gap-8">
          <h3 className="text-2xl md:text-3xl font-bold">Our Social Media Reach</h3>
          <HomeSocialSection/>
        </div>
      </section>
    </main>
  );
}