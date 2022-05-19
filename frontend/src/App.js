import "./index.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
//import TestSidebar from "./components/TestSidebar";
//import Admin_Dash from "./components/Admin_Dash";

import SettingPage from "./components/SettingPage";
import Sidebar from "./components/Sidebar";
//import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

//import TestDash from "./components/TestDash";
import CSSAddBaanner from "./components/CSSAddBaanner";
import EditBanner from "./components/EditBanner";

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
      </div>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Setting" element={<SettingPage />} />
        <Route path="/add" element={<CSSAddBaanner />} />
        <Route path="/update/_id" element={<EditBanner />} />
      </Routes>
    </Router>
  );
}

export default App;
/*

*/
