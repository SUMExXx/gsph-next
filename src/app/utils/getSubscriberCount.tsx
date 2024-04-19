import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.API_KEY;
const channelID = process.env.CHANNEL_ID;

async function getSubscriberCount(): Promise<number | null> {

    
    try {
        const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelID}&key=${apiKey}`;

        const response = await fetch(url);

        const data = await response.json();

        const items = data.items;

        if (!items || items.length === 0) {
            console.error('No channel found.');
            return null;
        }

        const subscriberCount = items[0]?.statistics?.subscriberCount;
        if (!subscriberCount) {
            console.error('Subscriber count not available.');
            return null;
        }

        return parseInt(subscriberCount, 10);

    } catch (error) {
        console.error('Error fetching subscriber count:', error);
        return null;
    }
}

export default getSubscriberCount;
