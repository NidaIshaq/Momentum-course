import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Course from "./Components/Course";
import About from "./Components/About";
import BotStats from "./Components/BotStats";
import VisaCards from "./Components/VisaCards";
import Contacts from "./Components/Contacts";


function App() {
  return (
    
    <Router>
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/" element={<Landing />} />
        <Route path="/course" element={<Course />} />
        <Route path="/about" element={<About />} />
        <Route path="/botstats" element={<BotStats />} />
       < Route path="/visacards" element={<VisaCards />} />
       < Route path="/contacts" element={<Contacts />} />
       
      </Routes>
    </Router>
  );
}

export default App;
