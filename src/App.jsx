import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Properties from './Pages/Properties/Properties';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/property-details/:id" element={<PropertyDetails />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </DndProvider>
  );
};

export default App;
