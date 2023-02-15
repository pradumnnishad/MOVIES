// import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Home from './Home'
import Addmovie from './Addmovie';
import Movieslist from './Movieslist';
import Moviedetail from './Moviedetail';
import Updatemovie from './Updatemovie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Addmovie">
            <Addmovie />
          </Route>
          <Route path="/updatemovie:id">
            <Updatemovie />
          </Route>
          <Route path="/moviedetail:id">
            <Moviedetail />
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
