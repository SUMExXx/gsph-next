interface Contact{
    address: string,
    location: string,
    email: string,
    call: {
        name: string,
        phoneNum: string
    }[]
}

export const contact: Contact = {
    address: '23, Nehru Park Road, Vallabh Nagar Indore, Madhya Pradesh, (452003) India',
    location: 'https://maps.app.goo.gl/Sfa8VVWRfyJgYXwr6',
    email: 'contact@ecellsgsits.com',
    call: [
        {
           name: 'Amrita',
            phoneNum: '+91 62325 86634' 
        },
        {
            name: 'Aahana',
            phoneNum: '+91 62633 94124'
        }
    ]
}