/* eslint-disable no-unused-vars */
import React from 'react'

import SponsorsCard from '@/app/components/SponsorsCard'
import sponsors from '@/data/sponsors'

function Sponsors() {
  return (
    <div className='sponsors-div w-full flex content-center justify-center items-center p-20 flex-wrap gap-[80px]'>
        {sponsors.map((s, i)=>{
            return(
                <SponsorsCard key={i} image={s.image} name={s.name} link={s.link}/>             
            )
        })}
    </div>
  )
}

export default Sponsors