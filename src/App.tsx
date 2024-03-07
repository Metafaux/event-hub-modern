import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/SignUpForm';

const App = () => {
  const handleSignUp = (name: string, email: string) => {
    // eslint-disable-next-line no-console
    console.log(`Name: ${name}; Email: ${email}`);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Event Hub Modern: Subconscious Dynamics</p>
        <SignUpForm onSubmit={handleSignUp} />
      </header>
    </div>
  );
};

export default App;
