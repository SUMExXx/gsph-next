import Image from "next/image";

import '@/app/css/Team.css';
import dep from "@/data/team";
import TeamCard from "../components/TeamCard";

export default function Team() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div className='team-container'>
        <h3 className='team-head text-[#0075BB]'>Meet our Team</h3>
        <div className='team-hr'/>
        <div className='team-dept-flex'>
            {dep.map((dept, i) =>{
                return (
                    <div key={i} className='team-dept-container'>
                        <h3 className='dept-name text-3xl'>{dept.department}</h3>
                        <div className='dept-container'>
                            {dept.heads.map((h, j)=>{
                                return(
                                    <TeamCard key={j} image={h.image} name={h.name} role={h.role} instagram={h.instagram} linkedin={h.linkedin}/>
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
