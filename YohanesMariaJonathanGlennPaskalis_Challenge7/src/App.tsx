import { useState } from 'react';
import { Link } from 'react-router-dom';

import Routes from './routes';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
          </ul>
        </nav>
      </div> */}
      <Routes />
    </>
  )
}

export default App
