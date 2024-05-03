import styles from './Event.module.scss';

interface EventProps {
  title: string;
  dateTime: Date;
  venueName: string;
  address: string;
  description: string;
  imageUrl: string;
}

const Event = ({
  title,
  dateTime,
  venueName,
  address,
  description,
  imageUrl
}: EventProps) => (
  <div className={styles.eventContainer}>
    <h1>{title}</h1>
    <p>
      Begins:
      {' ' +
        dateTime.toLocaleString(navigator.language, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          timeZoneName: 'short'
        })}
    </p>
    <p>Venue: {venueName}</p>
    <p>Address: {address}</p>
    <p>Description: {description}</p>
    {imageUrl !== '' && <img src={imageUrl} alt={title} />}
  </div>
);

export default Event;
