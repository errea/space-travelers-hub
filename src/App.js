import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Missions';

const App = () => (
  <BrowserRouter>
    <Header />
    <Missions />
  </BrowserRouter>
);

export default App;
