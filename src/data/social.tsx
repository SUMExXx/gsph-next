interface SocialData{
    platform: string,
    url: string,
    color: string,
    icon: string
    fiIcon: string
}

interface SocialLinks{
    instagram: SocialData,
    youtube: SocialData,
    linkedin: SocialData,
    facebook: SocialData,
}

export const socialLinks: SocialLinks = {
    instagram: {
        platform: "Instagram",
        url: 'https://www.instagram.com/gsproductionhouse/',
        color: '#D62976',
        icon: 'instagram.png',
        fiIcon: 'instagramBW.png',
    },
    youtube: {
        platform: "YouTube",
        url: 'https://www.youtube.com/@GSProductionHouse/',
        color: '#FF0000',
        icon: 'youtube.png',
        fiIcon:'youtubeBW.png',
    },
    linkedin: {
        platform: "LinkedIn",
        url: 'https://linkedin.com/company/gs-production-house/',
        color: '#0A66C2',
        icon: 'linkedin.png',
        fiIcon: 'linkedinBW.png',
    },
    facebook: {
        platform: "Facebook",
        url: 'https://www.facebook.com/profile.php?id=100067339908578',
        color: '#0866FF',
        icon: 'facebook.png',
        fiIcon: 'facebookBW.png',
    }
}

export default socialLinks