import Image from "next/image";
import Link from "next/link";

import { socialMediaReach } from "@/data/website";
import getSubscriberCount from "@/app/files/getSubscriberCount";
import CountingNumber from "@/app/components/CountingText";

const HomeSocialSection = async () =>{

    var subCount = await getSubscriberCount();

    subCount == null? (subCount = 2380) : (subCount = subCount)

    const folCount = 3754
    const socialCountList = [folCount, subCount]

    var m = 1;
    var i = 0;

    return(
        <div className="flex flex-wrap md:gap-24 gap-8">
            {
              socialMediaReach.map(item =>(
                <Link href={item.url} target='_blank' key={m++} className="md:rounded-3xl rounded-lg py-2 md:py-10 px-6 md:px-24 bg-white flex flex-col md:gap-4 gap-2 justify-center items-center" style={{boxShadow: '0px 4px 75px 0px rgba(0, 0, 0, 0.25)', borderRadius: '20px'}}>
                  <Image src={item.icon} alt='instagram logo' height={100} width={100}/>
                  <Image src={item.textIcon} alt='instagram logo' height={29} width={100} className=""/>
                  <CountingNumber number={socialCountList[i++]} />
                  <span className="text-sm">{item.unit}</span>
                </Link>
              ))
            }
        </div>
    )
}

export default HomeSocialSection;