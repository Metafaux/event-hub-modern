import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CmsEventItem } from '../types/CmsWordpressTypes';
import type { Event, EventState } from '../types/EventTypes';

const EMPTY_ARRAY = 0;

const getEventDataFromCmsEventItem = (event: CmsEventItem): Event => {
  return {
    title: event.title.rendered,
    dateTimeStart: event.acf.event_date_time,
    dateTimeEnd: event.acf.event_end_date_time,
    venueName: event.acf.venue_name,
    address: event.acf.event_address,
    description: event.acf.event_description,
    imageUrl: '',
    attendeeIds: {},
    performerIds: {}
  };
};

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL ?? '' }),
  endpoints: (builder) => ({
    getEvents: builder.query<EventState, void>({
      query: () => 'events',
      transformResponse: (response) => {
        const responseArray = response as CmsEventItem[];
        const responseLookup: EventState = {};
        if (response && responseArray.length > EMPTY_ARRAY)
          responseArray.forEach((event) => {
            responseLookup[event.id.toString()] =
              getEventDataFromCmsEventItem(event);
          });
        return responseLookup;
      }
    }),
    getEvent: builder.query<Event, string>({
      query: (id) => `events/${id}`,
      transformResponse: (response) => {
        const responseItem = response as CmsEventItem;
        return getEventDataFromCmsEventItem(responseItem);
      }
    })
  })
});

export const { useGetEventsQuery, useGetEventQuery } = eventsApi;
