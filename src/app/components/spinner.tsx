'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
 //import from next/navigation and not from next/router

function Spinner(): JSX.Element {
  const [loaded, setLoaded] = useState(false);

  // Event handler to set loaded to true when the page finishes loading
  const handleLoad = () => {
    setLoaded(true);
  };

  

  // Attach the event listener when the component mounts
  useEffect(() => {

    window.addEventListener('load', handleLoad);

    // Remove the event listener when the component unmounts
    return () => {
        window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className={`w-screen h-screen fixed inset-0 items-center justify-center bg-gray-900 transition-opacity ${loaded ? 'opacity-0' : 'opacity-100'}`} style={{ display: loaded? 'none' : 'flex'}}>
       {/* Spinner image */}
      <span className="relative flex h-[84px] w-[84px]">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0075BB] opacity-75"></span>
        <Image src="/icons/GSPH_Logo.png" className='animate-none relative inline-flex rounded-full' alt="Loading Spinner" width={84} height={84} />
      </span>
    </div>
  );
}

export default Spinner;