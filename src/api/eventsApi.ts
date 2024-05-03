import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CmsEventItem } from '../types/CmsWordpressTypes';

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL ?? '' }),
  endpoints: (builder) => ({
    getEvents: builder.query<CmsEventItem[], void>({
      query: () => 'events'
    }),
    getEvent: builder.query<CmsEventItem, string>({
      query: (id) => `events/${id}`
    })
  })
});

export const { useGetEventsQuery, useGetEventQuery } = eventsApi;
