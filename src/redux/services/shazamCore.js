import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const options = {
    method: 'GET',
    headers: { 
        'X-RapidAPI-Key': 'b86f23b2d2msh1f9568162fab148p178c87jsn1a1c92a398c9',
        'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
    },
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then((response) => response.json())
    .then((response) = console.log(response))
    .catch((err) => console.error(err))

    export const shazamCoreAPI = createApi({
       reducerPath: 'shazamCoreAPI' 
    });