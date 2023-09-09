import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from "./component/Auth/Signup/Signup";
import Login from "./component/Auth/login/Login"
import LineChart from "./component/graph/LineGraph";
import CountryMap from "./component/graph/Map";
import Contact from "./component/contact/Contact";
import ViewContact from "./component/contact/ViewContact";
import UpdateDetail from "./component/contact/UpdateDetail";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/update/:id" element={<UpdateDetail />} />
        <Route path="/delete/:id" element={<UpdateDetail />} />
        <Route path="/view" element={<ViewContact />} />
        <Route path="/chart" element={<LineChart />} />
        <Route path="/map" element={<CountryMap />} />
      </Routes>
    </Router>
  );
}

export default App;
