import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route exact path="/">
        <Rockets />
      </Route>
      <Route path="/missions">
        <Missions />
      </Route>
    </main>
  </BrowserRouter>
);

export default App;
