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
    email: 'gsproductionhouse18@gmail.com',
    call: [
        {
           name: 'Prakhar Mishra',
            phoneNum: '+91 97952 62432' 
        },
        {
            name: 'Varun Yadav',
            phoneNum: '+91 73899 94443'
        }
    ]
}