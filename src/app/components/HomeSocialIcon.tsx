import Link from "next/link";
import Image from "next/image";

import socialLinks from "@/data/social";

interface HomeSocialIconIterface{
    platform: string,
    url: string,
    color: string,
    icon: string
}

const HomeSocialIcon = ({platform, url, color, icon} : HomeSocialIconIterface) => {
    return (
        <Link className={`rounded-full border p-3 w-12 h-12 flex items-center justify-center border-[${color}]`} href={url} title={platform} style={{ borderColor: color }} target="_blank">
            <Image src={'/icons/'+icon} alt={platform} width={48} height={48}/>
        </Link>
    )
}

export default HomeSocialIcon;