import { aboutUsContent, club, mentors } from "@/data/website";
import { Lora } from "next/font/google";
import Image from "next/image";
import Reveal from "../components/Reveal";

const lora = Lora({ style: ['normal', 'italic'], subsets: ["latin"] });

const About = () => {
    return(
        <div className="w-full flex flex-col items-center bg-white">
            <div className="w-full h-[200px]">
                <video className="object-cover h-[200px] absolute" autoPlay loop muted style={{ width: '100%', height: '200px' }}>
                    <source src="/videos/gsph_video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="font-black relative w-full bg-[#FFFFFF] mix-blend-screen h-[200px] text-center flex flex-col justify-center items-center">
                    <h1 className="text-[36px] md:text-[96px] font-ultrabold">{club.name}</h1>
                    <h4 className="text-[24px] md:text-[36px] font-medium">{club.motto}</h4>
                </div>
            </div>
            <Reveal>
                <div className="p-4 md:p-16 flex md:flex-row flex-col gap-10">
                    <Image src={club.teamImage} width={600} height={400} alt='team image' className="rounded-xl cursor-pointer"/>
                    <p className={`${lora.className} font-medium italic text-center`}>{aboutUsContent.aboutUs}</p>
                </div>
            </Reveal>
            <div className="flex flex-col justify-center items-center gap-10 p-10">
                <Reveal><h1 className="font-bold text-4xl">Our Mentors</h1></Reveal>
                <div className="flex flex-wrap gap-10 justify-center items-center">
                    {
                        mentors.map((mentor, index) => (
                            <Reveal key={index}>
                                <div className='flex flex-col content-center items-center p-[10px] rounded-[20px] hover:shadow-2xl transform transition duration-500' style={{boxShadow: '0px 4px 75px 0px rgba(0, 0, 0, 0.25)'}}>
                                    <Image src={mentor.image} className='h-[280px] w-[280px] rounded-[15px] object-contain' alt={mentor.name} width={280} height={280}/>
                                    <div className="flex flex-col justify-center items-center pt-4">
                                        <h3 className='text-slate-800 text-xl font-bold'>{mentor.name}</h3>
                                        <h4 className='text-[#606060] font-medium'>{`${mentor.desg}, ${mentor.dept}`}</h4>
                                    </div>
                                </div>
                            </Reveal>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default About;