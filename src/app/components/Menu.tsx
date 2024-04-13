'use client';
import React, { useState } from 'react';
import Image from "next/image"
import Link from 'next/link';

import { navbarLinks } from '@/data/website';

const Menu = () =>{

    var key = 0; //we need to use key variable instead of crypto.randomUUID because it is not available in browser environment when using 'use client';

    const [isMenuOpen, setMenu] = useState(false);

    const toggleMenu = () =>{
          setMenu(!isMenuOpen);

          document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    }

    return(
        <button title='menu' className='mx-2 visible md:hidden' onClick={toggleMenu}>
            <Image src={isMenuOpen? '/icons/cross.png' : '/icons/menu.png'} alt='menu button' width={24} height={24} className='transition-transform duration-800 transform'/>

            {/* Menu */}

            <div className={`absolute flex md:hidden bg-slate-300 top-[60px] z-10 left-0 w-3/4 py-40 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} glass-container bg-opacity-50 backdrop-filter backdrop-blur-md p-4 rounded-r-lg shadow-lg`} style={{height: 'calc(100vh - 60px)'}}>
                <div className='flex flex-col items-center justify-center md:gap-8 gap-2 w-full text-3xl'>
                    <ul className='items-center justify-center gap-8 flex flex-col w-full'>
                        <li className='flex justify-center items-center'>
                            <Link href={'/'} className='flex justify-center items-baseline px-2 pt-2 pb-1 gap-1 rounded-md bg-[#CBE6E8]'>
                                <span>POV</span>
                                <Image src="/icons/sparkles.svg" height={16} width={16} alt='New Event'/>
                            </Link>
                        </li>
                        {
                            navbarLinks.map(item => (
                                <li key={key++}>
                                    <Link href={item.link}>{item.text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </button>
    )
}

export default Menu;