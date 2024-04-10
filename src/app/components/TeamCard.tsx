/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'

import '@/app/css/TeamCard.css'

const insta_icon = '/icons/instagram-color.png'
const linkedin_icon = '/icons/linkedin-color.png'

interface TeamCardProps{
  name: string,
  role: string,
  image: string,
  instagram: string,
  linkedin: string
}

const TeamCard = ({name, role, image, instagram, linkedin}: TeamCardProps) => {

  return (
    <div className='team-card'>
      <div className='team-card-container'>
        <div className='image-circle-pink'>
          <div className='image-circle-white'>
            <Image src={image} className='team-image' alt={role} width={180} height={180}/>
          </div>
        </div>
        <div className='team-text-div'>
          <h4 className='team-name'>{name}</h4>
          <h3 className='team-role'>{role}</h3>
        </div>
      </div>
      
      <div className='team-social-div'>
        <Instagram link={instagram}/>
        <LinkedIn link={linkedin}/>
      </div>
    </div>
  )
}

interface InstagramProps{
  link: string
}

const Instagram = ({link}: InstagramProps) => {
  if(link != ""){
    return (
      <Link href={link} target='_blank' rel='noreferrer' className='team-social-item'>
        <Image src={insta_icon} className='team-social-icon' alt='Instagram' width={24} height={24}/>          
      </Link>
    )
  }
}

interface LinkedInProps{
  link: string
}

const LinkedIn = ({link}: LinkedInProps) => {
  if(link != ""){
    return (
      <Link href={link} target='_blank' rel='noreferrer' className='team-social-item'>
        <Image src={linkedin_icon} className='team-social-icon' alt='LinkedIn' width={24} height={24}/>
      </Link>
    )
  }
}

export default TeamCard