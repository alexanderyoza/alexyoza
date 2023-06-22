import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import '../Styles/App.css';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Work from './Work';

function App() {

  return (
    <div className='App'>
      <Router>
        <>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/work' element={< Work />}></Route>
        </Routes>
        </>
      </Router>
    </div>
    // <div className='App'>
    //   <Router>
    //     <>
    //     <Menu scroll={ isScrolledTo } />
    //     <Routes>
    //     <Route exact path='/' element={< Home />}></Route>
    //     <Route exact path='/about' element={< About />}></Route>
    //     <Route exact path='/work' element={< />}></Route>
    //     </Routes>
    //     </>
    //   </Router>
    //   <Landing />
    //   <div ref={targetDivRef} >
    //     <Projects />
    //     <About />
    //     <Work />
    //   </div>
      
    // </div>
  );
}

export default App;
