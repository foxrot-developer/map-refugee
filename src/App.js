import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import NavigationRoutes from './Routes/NavigationRoutes';
import NavbarComponent from './Components/NavbarComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <NavigationRoutes />
      </Router>
    </div>
  );
}

export default App;
