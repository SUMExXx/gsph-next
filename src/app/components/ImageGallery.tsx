'use client';
import React from 'react';
import Image from 'next/image';
import { Masonry } from "react-plock";

import Reveal from './Reveal';

interface ImageGalleryProps {
  imagesUrl: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imagesUrl }) => {

    // const images = getImageUrlsFromFolder('gsph/events')

  return (
    <Masonry
      items={imagesUrl}
      config={{
        columns: [1, 2, 3, 4],
        gap: [24, 12, 12],
        media: [640, 768, 1024],
      }}
      render={(item, idx) => (
        <Reveal><Image key={idx} src={item} width={400} height={100} style={{ width: "100%", height: "auto" }} className='md:w-[400px] w-[100px]' alt='event image' /></Reveal>
      )}
    />
  );
};

export default ImageGallery;