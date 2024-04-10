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