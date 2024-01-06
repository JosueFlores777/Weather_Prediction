import './assets/css/App.css';
import Flooter from './components/Floooter';

import Navbar from './components/NavBar';
import WeatherPanel from './components/WeatherPanel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <WeatherPanel/>
      <Flooter/>
    </div>
  );
}

export default App;
