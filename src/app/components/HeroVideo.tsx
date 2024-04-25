'use client';
import { MouseEventHandler } from "react";

const HeroVideo = () =>{

    return(
        <div id="intro_video" className='pointer-events-none'>
            <video autoPlay muted loop preload="metadata" className="w-full object-cover md:h-[800px] h-screen" id='gsph_video'>
                <source src={'/videos/gsph_video.mp4'} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default HeroVideo;