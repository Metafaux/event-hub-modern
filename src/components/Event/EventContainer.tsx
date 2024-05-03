import Event from './Event';
import { useGetEventQuery } from '../../api/eventsApi';

interface EventContainerProps {
  id: string;
}

const EventContainer = ({ id }: EventContainerProps) => {
  const { data: eventData } = useGetEventQuery(id);

  return eventData ? (
    <Event
      title={eventData.title.rendered}
      dateTime={new Date(eventData.acf.event_date_time)}
      venueName={eventData.acf.venue_name}
      address={eventData.acf.event_address}
      description={eventData.acf.event_description}
      imageUrl=""
    />
  ) : null;
};

export default EventContainer;
