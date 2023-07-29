import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '../Styles/App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {

  return (
    <div className='App'>
      <Router>
        <>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
