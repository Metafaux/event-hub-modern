interface EventProps {
  title: string;
  date: string;
  time: string;
  venueName: string;
  address: string;
  description: string;
  imageUrl: string;
}

const Event = ({
  title,
  date,
  time,
  venueName,
  address,
  description,
  imageUrl
}: EventProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Venue: {venueName}</p>
      <p>Address: {address}</p>
      <p>Description: {description}</p>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default Event;
