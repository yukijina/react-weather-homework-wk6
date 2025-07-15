import './App.css';
import Form from './Form';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-heading-1'>Weather App</h1>
      </header>
      <Form defaultCity='New York' />
    </div>
  );
}

export default App;
