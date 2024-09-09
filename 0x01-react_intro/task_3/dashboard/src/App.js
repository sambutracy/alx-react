import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';

function App() {
  return (
    <>
      <header className='App-header'>
        <img width={200} height={200} src={logo} alt='logo' />
        <h1>School dashboard</h1>
      </header>
      <main className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
        <button type='button'>OK</button>
      </main>
      <footer className='App-footer'>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </>
  );
}

export default App;
