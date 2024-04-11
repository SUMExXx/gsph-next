import React, { useContext } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { navbarLinks } from '@/data/website';
import socialLinks from '@/data/social';
import HomeSocialIcon from './HomeSocialIcon';
import Menu from './Menu';

const Navbar = () => {

  return (
    <nav className='top-0 left-0 right-0 z-10 flex fixed justify-between bg-white text-black w-full lg:px-10 px-2 py-2 lg:py-3 h-[40]'>
        
        <Link href={'/'} className='flex items-center gap-2 md:gap-4 min-w-[110px]'>
            <div className='flex items-center'>
                <Image src={'/icons/GSPH_Logo.png'} width={60} height={60} alt={'GSPH logo'} className='md:w-[60px] md:h-[60px] w-[30px] h-[30px]'></Image>
            </div>
            <div className='flex items-center'>
                <Image src={'/icons/GSPH_Text.png'} width={110} height={30} alt={'Store-E name-logo'} className='md:w-[110px] md:h-[30px] w-[55px] h-[15px]'/>
            </div>
        </Link>

        <div className='flex md:gap-24 gap-2 justify-end'>

            <div className='flex w-full items-center justify-center'>

                <ul className='items-center md:gap-8 gap-2 font-medium md:flex hidden'>
                    <li className='flex justify-center items-center'>
                        <Link href={'/'} className='flex justify-center items-baseline px-2 pt-2 pb-1 gap-1 rounded-md bg-[#CBE6E8]'>
                            <span>POV</span>
                            <Image src="/icons/sparkles.svg" height={16} width={16} alt='New Event'/>
                        </Link>
                    </li>
                    <li className='items-center gap-8 font-medium md:flex hidden'>
                        {
                            navbarLinks.map(item => (
                                <li key={crypto.randomUUID()}>
                                    <Link href={item.link}>{item.text}</Link>
                                </li>
                            ))
                        }
                    </li>
                </ul>
            </div>

            <div className='flex gap-2 md:gap-6 items-center'>
                {
                    Object.values(socialLinks).map(link => (
                        <HomeSocialIcon key={crypto.randomUUID()} platform={link.platform} url={link.url} color={link.color} icon={link.icon}/>
                    ))
                }
                <Menu/>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar