/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'

interface SponsorsCardProps{
  image: string,
  name: string,
  link: string
}

function SponsorsCard({image, name, link}: SponsorsCardProps) {
  return (
    <Link href={link} target='_blank' rel='noreferrer' className='sponsors-content-div flex flex-col content-center items-center p-[10px] rounded-[20px]' style={{boxShadow: '0px 4px 75px 0px rgba(0, 0, 0, 0.25)'}}>
        <Image src={image} className='sponsors-image h-[280px] w-[280px] rounded-[15px] object-contain' alt={name} width={280} height={280}/>
        <h3 className='sponsors-name text-[#606060] font-bold p-5 pb-[10px]'>{name}</h3>
    </Link>
  )
}

export default SponsorsCard