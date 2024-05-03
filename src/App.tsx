import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/SignUpForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CalendarMonthView from './components/Calendar/MonthView';
import { useGetEventsQuery } from './api/eventsApi';
import EventContainer from './components/Event/EventContainer';

const handleSignUp = (name: string, email: string) => {
  // eslint-disable-next-line no-console
  console.log(`Name: ${name}; Email: ${email}`);
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <CalendarMonthView date={new Date()} />
  },
  {
    path: '/event',
    element: <div>Event Placeholder</div>
  },
  {
    path: '/signup',
    element: <SignUpForm onSubmit={handleSignUp} />
  }
]);

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/indent */
const App = () => {
  const { data, error, isLoading } = useGetEventsQuery();

  const TEMPORARY_EVENT_DISPLAY = <EventContainer id={'24'} />;

  return (
    <div className="App">
      {error ? (
        <p>An error has occurred.</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Event Hub Modern: Subconscious Dynamics</h3>
          </header>
          <RouterProvider router={router} />
          {TEMPORARY_EVENT_DISPLAY}
        </>
      ) : null}
    </div>
  );
};

export default App;
