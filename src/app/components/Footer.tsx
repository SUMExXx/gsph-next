import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import { contact } from '@/data/info'
import { footerData, navbarLinks } from '@/data/website'
import socialLinks from '@/data/social'

const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-center bg-black' id='contact'>
        <div className='w-full flex flex-wrap gap-8 md:gap-24 justify-center px-6 md:px-24 py-6 md:py-16'>
            <div className='flex flex-col gap-6'>
                <div className='flex gap-10 justify-center items-center'>
                    <Image src={'/icons/SGSITS-Indore-Logo.png'} className='rounded-full bg-white' width={100} height={100} alt={'GSPH logo'}></Image>
                    <Image src={'/icons/GSPH_Logo.png'} width={100} height={100} alt={'GSPH logo'}></Image>
                </div>
                <div className='flex gap-6 justify-center items-center'>
                    {
                        Object.values(socialLinks).map(link => (<Link style={{filter: 'invert(80%)'}} key={crypto.randomUUID()} href={link.url} target='_blank'><Image src={'/icons/'+link.fiIcon} width={24} height={24} alt={link.platform}/></Link>))
                    }
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-gray-300 font-bold'>QUICK LINKS</h3>
                <ul className='flex flex-col text-gray-400'>
                    {
                        navbarLinks.map(item => {
                            return(
                                <li key={crypto.randomUUID()}><Link href={item.link}>{item.text}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-gray-300 font-bold'>EVENTS</h3>
                <ul className='flex flex-col text-gray-400'>
                    {
                        footerData.events.map((item) => {
                            return(
                                <li key={crypto.randomUUID()}><Link href={item.link}>{item.text}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='flex flex-col gap-2 max-w-lg'>
                <h3 className='text-gray-300 font-bold'>CONTACT US</h3>
                <ul className='flex flex-col text-gray-400 gap-1'>
                    <li className='flex flex-row gap-2 align-middle'>
                        <Image src="/icons/marker.png" style={{filter: 'invert(80%)'}} alt='location' height={16} width={16} className='object-contain'/>
                        <Link href={contact.location}>{contact.address}</Link>
                    </li>
                    <li className='flex flex-row gap-2 align-middle'>
                        <Image src="/icons/envelope.png" style={{filter: 'invert(80%)'}} alt='location' height={16} width={16} className='object-contain'/>
                        <Link href={'mailto:'+contact.email}>{contact.email}</Link>
                    </li>
                    <li className='flex flex-row gap-2 align-middle '>
                        <Image src="/icons/phone.png" style={{filter: 'invert(80%)'}} alt='location' height={16} width={16} className='object-contain'/>
                        <Link href={'tel:'+contact.call[0].phoneNum}>{contact.call[0].name}: {contact.call[0].phoneNum}</Link>
                    </li>
                    <li className='flex flex-row gap-2 align-middle '>
                        <Image src="/icons/phone.png" style={{filter: 'invert(80%)'}} alt='location' height={16} width={16} className='object-contain'/>
                        <Link href={'tel:'+contact.call[1].phoneNum}>{contact.call[1].name}: {contact.call[1].phoneNum}</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="w-full h-[1px] bg-gray-800">
        </div>
        <div className='px-2 md:px-6 py-2 md:py-6 flex justify-center items-center text-sm text-gray-400'>
            © GS Production House 2024
        </div>
        
    </div>
  )
}

export default Footer