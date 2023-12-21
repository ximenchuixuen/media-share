import React, {useState, useEffect} from 'react';
import { Link, Outlet } from 'react-router-dom';

function App(props) {
  return(
    <div id='app-container' className="container-fluid">
      <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
      <div id='content-containeer' className='.container'>
        <Outlet />
      </div>
    </div>


  )
}

export default App; 

// import React, { useState } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import Login from './Login';
// import Home from './Home';
// import { Link, Outlet } from 'react-router-dom'

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   console.log(loggedIn);
//   return (
//     <Routes>
//       <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
//       <Route path="/home" element={<Home />} />
//       <Route
//         path="*"
//         element={
//           loggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />
//         }
//       />

//     </Routes>

//   );
// }

// export default App;
