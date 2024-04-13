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