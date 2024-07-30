import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Trend from './components/Trend';
import Mainpage from './components/Mainpage';
import './App.css';
import Login from './components/Login'
import MyOrdersPage from './components/MyOrdersPage'
import ReelDetail from './components/ReelDetail';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Login/> */}
        <Routes>
          <Route path="/trend" element={<><Navbar/><Trend /></>} />
          <Route path="/mainpage" element={<><Navbar/><Mainpage /></>} />
          <Route path="/" element={<><Login /></>} />
          <Route path="/MyOrders" element={<><Navbar/><MyOrdersPage/></>} />
          <Route path="/reel/:id" element={<ReelDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
