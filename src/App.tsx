import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/SignUpForm';
import Event from './components/Event/Event';
import { useEffect, useState } from 'react';
import axios from 'axios';
import type { CmsEventItem } from './types/CmsWordpressTypes';

const cmsEventsUrl = process.env.REACT_APP_API_URL ?? '';
const STATUS_404 = 404;

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/indent */
const App = () => {
  const [appData, setAppData] = useState<CmsEventItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const eventItems: CmsEventItem[] = [];

  useEffect(() => {
    axios
      .get<CmsEventItem[]>(cmsEventsUrl, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        setAppData(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex.response.status === STATUS_404
            ? 'Resource not found'
            : 'An unexpected error has occurred';
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleSignUp = (name: string, email: string) => {
    // eslint-disable-next-line no-console
    console.log(`Name: ${name}; Email: ${email}`);
  };
  return (
    <div className="App">
      {error && <p>{error}</p>}
      {!error && appData[0] && (
        <>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Event Hub Modern: Subconscious Dynamics</h3>
          </header>
          <SignUpForm onSubmit={handleSignUp} />
          <Event
            title={appData[0].title.rendered}
            dateTime={new Date(appData[0].acf.event_date_time)}
            venueName={appData[0].acf.venue_name}
            address={appData[0].acf.event_address}
            description={appData[0].acf.event_description}
            imageUrl=""
          />
        </>
      )}
    </div>
  );
};

export default App;
