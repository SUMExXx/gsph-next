import getSubscriberCount from "@/app/utils/getSubscriberCount"

export const club = {
    name: 'GS Production House',
    motto: 'Fed by Talents, Led by Creations',
    teamImage: 'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:best/f_auto/v1714013551/gsph/images/ehevpjxsckfunnxvuxom.jpg'
}

interface WebData{
    title: string,
    description: string
}

export const webData: WebData = {
    title: 'GS Production House',
    description: 'GS Production House'
}

export const navbarLatest = {
    id: 'pov2024'
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

export const SlidingTextData = {
    sentence: 'The Media Production Club of SGSITS and the home of',
    texts: ['Creativity', 'Passion', 'Media', 'Design', 'Self Expression', 'Creativity', ] //Put the first one also in the last
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

interface Event{
    name: string,
    id: string,
    tagline: string,
    desc: string,
    images: string[]
}

// const quality = '/w_1000/q_auto:good/f_auto'

export const events : Event[] = [
    {
        name: 'POV',
        id: 'pov2024',
        tagline: 'Poetry of Visuals',
        desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
        images: [
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713540512/gsph/events/w2k8drs37unfpybxbubv.jpg',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713540514/gsph/events/v4h5hyu3etatumu7d5g4.jpg',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713540505/gsph/events/lxio4uww6rbofdwogg7s.jpg',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713540508/gsph/events/qu82tcjukb7nfz901gaf.jpg',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713540510/gsph/events/zbotdmyefo4x1iwhxf2q.jpg',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713540511/gsph/events/oonuie1uhhrexrywbvxy.jpg',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713540512/gsph/events/sas3gfmdm5lnrkcn6auv.jpg'
        ]
    },
    {
        name: 'KHOJ',
        id: 'khoj2023',
        tagline: 'Kapture Haunt of Joy!',
        desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
        images: [
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713553965/gsph/events/khoj/xccyyqwwmh0gxrsclkmo.jpg',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713553965/gsph/events/khoj/hgwcglua4eykcwgxmjkv.jpg',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713553962/gsph/events/khoj/dg9wy6tw7ae8jxu2y0lp.jpg',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713553962/gsph/events/khoj/sfzpfonta9frikdeyvrd.jpg',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713553960/gsph/events/khoj/cga9nrph9gps1xfcihim.jpg',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713553966/gsph/events/khoj/ozker0t1muzyde8cfapg.jpg',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713554372/gsph/events/khoj/krrxekktghqxpw52lmrc.jpg',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713553965/gsph/events/khoj/kzsnxkaixar6pzyam0uj.jpg'
        ]
    },
    {
        name: 'Polaroid',
        id: 'polaroid2023',
        tagline: 'The First Shot',
        desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
        images: [
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713556344/gsph/events/polaroid/qniungps8fvtvzad93in.png',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713556343/gsph/events/polaroid/pnhvrciytwgpisyqrkb4.png',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713556346/gsph/events/polaroid/dwhjs40xxuepkqgtveme.jpg',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713556344/gsph/events/polaroid/jhirdrs43f1js8ehpc4k.png',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713556343/gsph/events/polaroid/glk2w3a7lzjyzumhibwf.jpg',
            'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1713556343/gsph/events/polaroid/apuu2jug2cxvop8b65wm.png',
        ]
    }
]

export const customColors = {
    home: ['rgba(96, 165, 250, 0.9)', 'rgba(167, 139, 250, 0.9)', 'rgba(254, 178, 178, 0.9)', 'rgba(52, 211, 153, 0.9)', 'rgba(0, 0, 0, 0.95)',]
}

export const aboutUsContent = {
    aboutUs: "GS Production House, founded in 2018, is a creative collective dedicated to the art of videography and filmmaking. Our club comprises passionate individuals who share a love for storytelling through the lens of a camera. With a primary focus on videography, design, and film making, GS Production House aims to nurture and showcase talent in these fields. At GS Production House, we believe in the power of visual storytelling to captivate audiences and evoke emotions. Through a series of events, workshops, and contests, we provide our members with opportunities to hone their skills, explore new techniques, and unleash their creativity. From cinematography to video editing, from scriptwriting to directing, we cover various aspects of videography and filmmaking. In addition to technical skills, we also emphasize the importance of artistic expression and creativity. Our events often feature a touch of poetry and charisma, adding depth and soul to our productions. Whether it's capturing the beauty of everyday life or delving into complex narratives, we strive to create meaningful and impactful visual experiences. Through collaborations with industry professionals and organizations, we manage to showcase the best of our creativities. Our goal is to empower aspiring filmmakers and videographers with the knowledge, resources, and support they need to bring their visions to life. We are GS Production House, where creativity meets craftsmanship, and together, let's create cinematic masterpieces that inspire and entertain."
}

export const mentors = [
    {
        name: 'Mrs. Priyanka Bamne',
        desg: 'Assistant Professor',
        dept: 'CSE',
        image: 'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1714017856/gsph/images/hki3bwzjxcrwxdmu1kq3.jpg',
        ph: '0731-2582463',
        email: 'pbamne@sgsits.ac.in'
    },
    {
        name: 'Mr. Ashwin Shrivastava',
        desg: 'Assistant Professor',
        dept: 'ETC',
        image: 'https://res.cloudinary.com/deeqsba43/image/upload/w_1000/q_auto:good/f_auto/v1714017943/gsph/images/zzxiip5hu2p89asrsmsx.jpg',
        ph: '0731-2582670',
        email: 'ashwinshrivastava88@gmail.com'
    }
]