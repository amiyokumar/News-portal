import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Sports from './Components/Sports';
import Business from './Components/Business';
import Entertainment from './Components/Entertainment';
import Health from './Components/Health';
import Technology from './Components/Technology';
import Science from './Components/Science';
import Germany from './Components/Germany';
import Us from './Components/Us';
import LoadingBar from 'react-top-loading-bar';
import Denmark from './Components/Denmark';
import China from './Components/China';
import Rusia from './Components/Rusia';
import France from './Components/France';
const App = ()=> {
  const pageSize = 5;
  const apiKey = "5eecd1feae2c4104a59359eeb7e5f191";
  const [progress, setProgress] = useState(0)
 
    return (
      <>
        <Router>
        <Navbar/> 
        <LoadingBar
        height={2}
        color='#f11946'
        progress={progress} 
      />
      <Routes>
          <Route exact path="/"  element={<Home/>} pageSize={pageSize} />
          <Route path="/business" element={<Business/>} />
          <Route path="/entertainment" element={<Entertainment/>} />
          <Route path="/health" element={<Health/>} />
          <Route path="/science" element={<Science/>} />
          <Route path="/sports" element={<Sports/>} />
          <Route path="/technology" element={<Technology/>} />
          <Route path="/us" element={<Us/>} />
          <Route path="/Germany" element={<Germany/>} />
          <Route path="/denmark" element={<Denmark/>} />
          <Route path="/france" element={<France/>} />
          <Route path="/china" element={<China/>} />
          <Route path="/rusia" element={<Rusia/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}
export default App;