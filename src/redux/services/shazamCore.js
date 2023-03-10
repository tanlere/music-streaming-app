import { createApi, fakeBaseQuery, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreAPI = createApi({
    reducerPath: 'shazamCoreAPI', 
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'b86f23b2d2msh1f9568162fab148p178c87jsn1a1c92a398c9');

        return headers;
    },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
    })
});

export const {
    useGetTopChartsQuery
} = shazamCoreAPI;