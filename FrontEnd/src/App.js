//import logo from './logo.svg';
import HomePage from './Components/Homepage'
import Login from './Components/Login'
import CreateFlight from './Components/CreateFlight'
import AllFlights from './Components/AllFlights'
import UpdateFlight from './Components/UpdateFlight'
import './App.css';
import { createBrowserHistory } from "history";
//import { Route, Link } from "react-router-dom"
import Tabs from './Components/Tabs'
import SearchPage from './Components/SearchPage'
import { Router, Route, Switch } from "react-router-dom";
function App() {
  var hist = createBrowserHistory();
  return (
    <div className='App '>

      {/* <Route exact path="/" component={HomePage} /> */}

      {/* <AllFlights /> */}
      {/* <Tabs /> */}
      <Router history={hist}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/AllFlights" component={AllFlights} />
        <Route exact path="/Search" component={SearchPage} />
      </Router>
    </div>
  )
}

export default App;
