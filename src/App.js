import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import NavigationRoutes from './Routes/NavigationRoutes';
import NavbarComponent from './Components/NavbarComponent';
import Footer from './Shared/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <NavigationRoutes />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
