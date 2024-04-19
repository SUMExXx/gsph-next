'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface EventsCarouselProps{
  images: string[]
}

const EventsCarousel = ({ images } : EventsCarouselProps) => {

  return (
    <div className="flex justify-start items-center w-screen overflow-hidden">
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
        {
          images.map((imageUrl, index) => (
            <SwiperSlide key={index} className='flex justify-center items-center w-full overflow-hidden'>
              <div className='flex justify-center items-center gap-10' style={{ height: '400px'}}>
                <div className='flex justify-center items-center content-center'>
                  <Image src={imageUrl} alt={`${index}`} height={300} width={300}></Image>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default EventsCarousel;