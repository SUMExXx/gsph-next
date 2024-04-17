import getSubscriberCount from "@/app/files/getSubscriberCount"

interface WebData{
    title: string,
    description: string
}

export const webData: WebData = {
    title: 'GS Production House',
    description: 'GS Production House'
}

interface NavbarLink{
    text: string,
    link: string 
}

export const navbarLinks: NavbarLink[] = [
    {
        text: "Home",
        link: "/"
    },
    {
        text: "About",
        link: "/about"
    },
    {
        text: "Events",
        link: "/events"
    },
    {
        text: "Sponsors",
        link: "/sponsors"
    },
    {
        text: "Team",
        link: "/team"
    },
    {
        text: "Contact",
        link: "#contact"
    }
]

interface FooterData{
    events: {
        text: string,
        link: string
    }[]
}

export const footerData: FooterData = {
    events: [
        {
            text: 'POV',
            link: ''
        },
        {
            text: 'Polaroid',
            link: ''
        }
    ]
}

interface UpdateableLinks{
    latestVideo: string
}

export const updateableLinks: UpdateableLinks = {
    latestVideo: "https://www.youtube.com/embed/ppNC8zmday4?si=aZ6AoQIlW2CdHFPT"
}

interface SocialMediaReach{
    icon: string,
    textIcon: string,
    unit: string,
    url: string
}

const count = new Number(getSubscriberCount());

export const socialMediaReach: SocialMediaReach[] = [
    {
        icon: '/icons/instagram.png',
        textIcon: '/icons/instagram-text.png',
        unit: 'FOLLOWERS',
        url: 'https://www.instagram.com/gsproductionhouse/'
    },
    {
        icon: '/icons/youtube.png',
        textIcon: '/icons/youtube-text.png',
        unit: 'SUBSCRIBERS',
        url: 'https://www.youtube.com/@GSProductionHouse/'
    }
]

interface YTVideo{
  url: string,
  title: string
};

interface InstaPost{
    url: string,
    title: string
}

interface Featured{
    yt: YTVideo[],
    ig: InstaPost[]
}

export const featured: Featured = {
    yt: [
        {
            url: 'https://www.youtube.com/embed/xdKeIQBWub0?si=ZqKT_OTj0CQQqxqq',
            title: 'SGSITS Campus Tour'
        },
        {
            url: 'https://www.youtube.com/embed/mffW_AIrX5c?si=OLsumsTPf9PvN8lM',
            title: '4 years of GSPH'
        },
        {
            url: 'https://www.youtube.com/embed/J8eLGnC4xtM?si=ylQAJgN76Y6JgNSr',
            title: 'Fresher\'s Introduction 2022'
        },
        {
            url: "https://www.youtube.com/embed/XOUEZnljqHk?si=8tZkmiTGJ6xQRyny",
            title: 'Ganesh Chaturthi'
        },
        {
            url: "https://www.youtube.com/embed/y_MIW9DXfiQ?si=R-VgWBWmDTPKMZ8s",
            title: 'Independence Day Celebrations'
        },
        {
            url: "https://www.youtube.com/embed/UqqrY8sz7Ec?si=bv5jIEjaccyBCQUv",
            title: 'Krishna Flute Theme'
        }
    ],

    ig: [
        {
            url: 'https://www.instagram.com/p/C3ezsjFPN94/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
            title: 'KHOJ- Kapture Haunt Of Joy'
        },
        {
            url: 'https://www.instagram.com/p/CyLOcTCteZG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
            title: 'KHOJ- Kapture Haunt Of Joy'
        },
        {
            url: 'https://www.instagram.com/p/Cu6euJ9p2NY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
            title: 'Digital Dastaan'
        },
        {
            url: 'https://www.instagram.com/p/CpiPe6Mtm_P/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
            title: 'POLAROID - The First Shot'
        },
        {
            url: 'https://www.instagram.com/p/CcCcNvzJZ2H/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
            title: 'Scen-e-Matic: Frame your shot!'
        },
        {
            url: 'https://www.instagram.com/p/CbpADfPJitI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
            title: 'AFSAANE - A Euphorian Tale'
        }
    ]
}