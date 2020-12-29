import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import Legendaries from './Pages/Legendaries';
import Pokidex from './Pages/Pokidex';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Legendaries">
            <Legendaries />
          </Route>
          <Route exact path="/Pokidex">
            <Pokidex />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
