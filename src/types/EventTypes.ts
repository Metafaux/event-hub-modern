export interface EventProps {
  title: string;
  dateTimeStart: string;
  dateTimeEnd: string;
  venueName: string;
  address: string;
  description: string;
  imageUrl: string;
}

export interface Event extends EventProps {
  attendeeIds: Record<string, boolean>;
  performerIds: Record<string, boolean>;
}

export interface FestivalSetTime extends Event {
  parentEventId: string;
}

export type EventState = Record<string, Event>;
