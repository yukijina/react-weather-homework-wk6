import './App.css';
import Form from './Form';

function App() {
  return (
    <div className='App'>
      <div className='App-container'>
        <header className='App-header'>
          <h1 className='App-heading-1'>Weather App</h1>
        </header>
        <Form defaultCity='New York' />
      </div>
      <footer className='App-footer'>
        <p>
          This project was coded by Yukiji and is open-sourced on{' '}
          <a
            href='https://github.com/yukijina/react-weather-homework-wk6'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
