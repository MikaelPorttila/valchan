import type { VercelRequest, VercelResponse } from '@vercel/node';
/* import 'isomorphic-fetch'; */

export default async (request: VercelRequest, response: VercelResponse) => {
    /* console.log('Start fetch');
    
    const fetchResponse = await fetch('https://www.svt.se/special/valjarbarometern/');
    // TODO: Trash response, replace fetch with a headless client. (Playwright?)
    const body = await fetchResponse.text();
    console.log(body); */
    

    const { name } = request.query;
    return response.status(200).send(`Hello ${name}!!!`);
};