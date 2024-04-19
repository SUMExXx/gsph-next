import Image from "next/image";

import '@/app/css/Team.css';
import dep from "@/data/team";
import TeamCard from "../components/TeamCard";
import Reveal from "../components/Reveal";

export default function Team() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 text-center">
      <div className='team-container'>
        <Reveal><h3 className='team-head text-[#0075BB] text-[48px]'>Meet our Team</h3></Reveal>
        <div className='team-hr'/>
        <div className='team-dept-flex'>
            {dep.map((dept, i) =>{
                return (
                    <div key={i} className='team-dept-container'>
                        <Reveal><h3 className='dept-name text-black text-3xl'>{dept.department}</h3></Reveal>
                        <div className='dept-container'>
                            {dept.heads.map((h, j)=>{
                                return(
                                    <Reveal key={j}><TeamCard key={j} image={h.image} name={h.name} role={h.role} instagram={h.instagram} linkedin={h.linkedin}/></Reveal>
                                )
                            })}
                            
                        </div>
                        
                    </div>
                )
            })}
        </div>
      </div>
    </main>
  );
}
