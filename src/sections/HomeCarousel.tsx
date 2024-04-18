'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { InstagramEmbed } from 'react-social-media-embed';
import Link from 'next/link';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { featured } from '@/data/website';

const HomeCarousel = () => {

  var l = 0;

  return (
    <div className="flex justify-start items-center w-full overflow-hidden">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        loop={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      >
        <SwiperSlide className='flex justify-center items-center'>
          <div className='justify-center items-center gap-10 overflow-x-auto md:flex hidden h-full' style={{ height: '400px'}}>
            <iframe width="240" height="134" src={featured.yt[0].url} className='md:rounded-2xl rounded-lg md:w-[300px] md:h-[168px] w-[398px] h-[223px]' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

            </iframe>
            <iframe width="400" height="224" src={featured.yt[1].url} className='md:rounded-2xl rounded-lg md:w-[560px] md:h-[315px] w-[398px] h-[223px]' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

            </iframe>
            <iframe width="240" height="134" src={featured.yt[2].url} className='md:rounded-2xl rounded-lg md:w-[300px] md:h-[168px] w-[398px] h-[223px]' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

            </iframe>
          </div>

          {/* For MD */}
          
          <div className='flex flex-wrap justify-center items-center gap-10 overflow-x-auto md:hidden p-10'>
            <iframe width="300" height="168" src={featured.yt[1].url} className='md:rounded-2xl rounded-lg' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

            </iframe>
            <Link href={featured.yt[0].url+'?autoplay=0'} target="_blank">
              <iframe width="120" height="67" src={featured.yt[0].url} className='md:rounded-2xl rounded-lg' title="YouTube video player" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" style={{pointerEvents: 'none'}}>

              </iframe>
            </Link>
            <Link href={featured.yt[2].url+'?autoplay=0'} target="_blank">
              <iframe width="120" height="67" src={featured.yt[2].url} className='md:rounded-2xl rounded-lg' title="YouTube video player" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" style={{pointerEvents: 'none'}}>

              </iframe>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className='justify-center items-center gap-10 overflow-x-auto flex md:gap-10'>
          <div className='flex md:hidden justify-center items-center gap-10' style={{ height: '400px'}}>
            <div className='flex justify-center items-center content-center' style={{ transform: 'scale(0.8)', transformOrigin: 'center', maxWidth: 'fit-content'}}>
              <InstagramEmbed url={featured.ig[1].url} height={500} style={{borderRadius: '16px'}}/>
            </div>
          </div>

          {/* For MD */}

          <div className='justify-center items-center gap-10 overflow-x-auto md:flex hidden h-full' style={{ height: '400px'}}>
            <iframe width="240" height="134" src={featured.yt[4].url} className='md:rounded-2xl rounded-lg md:w-[300px] md:h-[168px] w-[398px] h-[223px]' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

            </iframe>
            <iframe width="400" height="224" src={featured.yt[3].url} className='md:rounded-2xl rounded-lg md:w-[560px] md:h-[315px] w-[398px] h-[223px]' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

            </iframe>
            <iframe width="240" height="134" src={featured.yt[5].url} className='md:rounded-2xl rounded-lg md:w-[300px] md:h-[168px] w-[398px] h-[223px]' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

            </iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex md:hidden justify-center items-center gap-10' style={{ height: '400px'}}>
            <div className='flex justify-center items-center content-center' style={{ transform: 'scale(0.8)', transformOrigin: 'center', maxWidth: 'fit-content'}}>
              <InstagramEmbed url={featured.ig[0].url} height={500} style={{borderRadius: '16px'}}/>
            </div>
          </div>

          {/* For MD */}

          <div className='md:flex hidden justify-center items-center gap-10' style={{ height: '400px'}}>
            <div className='md:flex hidden justify-center items-center content-center' style={{ transform: 'scale(0.6)', transformOrigin: 'center', maxWidth: 'fit-content'}}>
              <InstagramEmbed url={featured.ig[0].url} height={500} style={{borderRadius: '16px'}}/>
            </div>
            <div className='flex justify-center items-center content-center' style={{ transform: 'scale(0.8)', transformOrigin: 'center', maxWidth: 'fit-content'}}>
              <InstagramEmbed url={featured.ig[1].url} height={500} style={{borderRadius: '16px'}}/>
            </div>
            <div className='md:flex hidden justify-center items-center content-center' style={{ transform: 'scale(0.6)', transformOrigin: 'center', maxWidth: 'fit-content'}}>
              <InstagramEmbed url={featured.ig[2].url} height={500} style={{borderRadius: '16px'}}/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='md:hidden flex justify-center items-center gap-10' style={{ height: '400px'}}>
            <div className='flex justify-center items-center content-center' style={{ transform: 'scale(0.8)', transformOrigin: 'center', maxWidth: 'fit-content'}}>
              <InstagramEmbed url={featured.ig[2].url} height={500} style={{borderRadius: '16px'}}/>
            </div>
          </div>

          {/* For MD */}

          <div className='md:flex hidden justify-center items-center gap-10' style={{ height: '400px'}}>
            <div className='md:flex hidden justify-center items-center content-center' style={{ transform: 'scale(0.6)', transformOrigin: 'center', maxWidth: 'fit-content'}}>
              <InstagramEmbed url={featured.ig[3].url} height={500} style={{borderRadius: '16px'}}/>
            </div>
            <div className='flex justify-center items-center content-center' style={{ transform: 'scale(0.8)', transformOrigin: 'center', maxWidth: 'fit-content'}}>
              <InstagramEmbed url={featured.ig[4].url} height={500} style={{borderRadius: '16px'}}/>
            </div>
            <div className='md:flex hidden justify-center items-center content-center' style={{ transform: 'scale(0.6)', transformOrigin: 'center', maxWidth: 'fit-content'}}>
              <InstagramEmbed url={featured.ig[5].url} height={500} style={{borderRadius: '16px'}}/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarousel;