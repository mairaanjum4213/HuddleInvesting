const axios = require('axios');
import { NextResponse } from 'next/server';
export async function GET() {
    try {
        const apiKey = process.env.HUBSPOT_ACCESS_TOKEN;
        const apiUrl = `https:api.hubapi.com/crm/v3/objects/contacts`;
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });
        return NextResponse.json(response.data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch data' });
    }
}
export async function POST(req) {
    try {
        const apiKey = 'pat-na1-fbcc8335-f65c-4c91-b687-672ab1333bbe';
        const apiUrl = `https:api.hubapi.com/crm/v3/objects/contacts`;
        const data = await req.json();
        console.log("data : ", data)
        const response = await axios.post(apiUrl, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        });
        console.log("response : ", response.data)
        return NextResponse.json({ success: 'Data sent successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Incorrect Information' });
    }
}