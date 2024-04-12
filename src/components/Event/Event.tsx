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
    <p>{dateTime.toLocaleString()}</p>
    <p>Venue: {venueName}</p>
    <p>Address: {address}</p>
    <p>Description: {description}</p>
    {imageUrl !== '' && <img src={imageUrl} alt={title} />}
  </div>
);

export default Event;
