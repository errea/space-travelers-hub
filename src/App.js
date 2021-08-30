import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route exact path="/">
        <Rockets />
      </Route>
    </main>
  </BrowserRouter>
);

export default App;
