//import logo from './logo.svg';

import Login from './Components/Admin/Login'
import CreateFlight from './Components/Admin/CreateFlight'
import AllFlights from './Components/Admin/AllFlights'
import UpdateFlight from './Components/Admin/UpdateFlight'
import Home from './Components/User/HomePage'
import Admin from './Components/Admin/Homepage'
import DepartingResults from './Components/User/DepartingResults'
import ReturningResults from './Components/User/ReturningResults'
// import CreateFlight from './Components/CreateFlight'
import Seats from './Components/User/Seats'
import './App.css';
import { createBrowserHistory } from "history";
//import { Route, Link } from "react-router-dom"
import Tabs from './Components/Admin/Tabs'
import SearchPage from './Components/Admin/SearchPage'
import { Router, Route, Switch } from "react-router-dom";
function App() {
  var hist = createBrowserHistory();
  return (
    <div className='App '>

      {/* <Route exact path="/" component={HomePage} /> */}

      {/* <AllFlights /> */}
      {/* <Tabs /> */}
      <Router history={hist}>
        <Route exact path="/" component={Home} />
        <Route exact path="/DepartingFlights" component={DepartingResults} />
        <Route exact path="/ReturningingFlights" component={ReturningResults} />
        <Route exact path="/Admin" component={Admin} />
        <Route exact path="/AllFlights" component={AllFlights} />
        <Route exact path="/Search" component={SearchPage} />
        <Route exact path="/Create" component={CreateFlight} />
        <Route exact path="/Update/:id" component={UpdateFlight} />
        <Route exact path="/Seats" render={Seats} />

      </Router>
    </div>
  )
}

export default App;
