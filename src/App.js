import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single"
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

// function App() {
//   return (
//     <div className="App">
//       <TopBar />
//       <Register />
//     </div>
//   );
// }

const App = () => {
  return (
        <div className='My-app'>
          <Router>
            <Routes>
              
              <Route path="/" element={<TopBar/>}>
              <Route index element={<Home />} />
              
              </Route>
            </Routes>
          </Router>
        </div>

  )
}

export default App;
 