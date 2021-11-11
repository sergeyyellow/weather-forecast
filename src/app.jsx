import { Component } from 'react';
// The "react-router" library is needed for routing between web application pages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Web Application Pages
import Home from './components/pages/home/home';
import MoreDetails from './components/pages/more-details/more-details';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/more-details" element={<MoreDetails />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;