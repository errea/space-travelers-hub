import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
