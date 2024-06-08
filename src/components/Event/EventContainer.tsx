import Event from './Event';
import { useGetEventQuery } from '../../api/eventsApi';

interface EventContainerProps {
  id: string;
}

const EventContainer = ({ id }: EventContainerProps) => {
  const { data: eventData } = useGetEventQuery(id);

  return eventData ? <Event {...eventData} /> : null;
};

export default EventContainer;
