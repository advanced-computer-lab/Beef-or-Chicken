//import logo from './logo.svg';
import HomePage from './Components/Homepage'
import Login from './Components/Login'
import CreateFlight from './Components/CreateFlight'
import AllFlights from './Components/AllFlights'
import './App.css';
import { Route, Link } from "react-router-dom"

function App() {
  return (
    <div className='App '>

      {/* <Route exact path="/" component={HomePage} /> */}

      <CreateFlight />

    </div>
  )
}

export default App;
