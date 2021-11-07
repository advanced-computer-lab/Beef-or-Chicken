//import logo from './logo.svg';
import Header from './Components/Header';
import HomePage from './Components/Homepage'
import './App.css';
import { Route, Link } from "react-router-dom"
import SearchPage from './Components/SearchPage';
import Test from './Components/CreateFlight'

function App() {
  return (
    <div className='App '>
      <Header />
      {/* <Route exact path="/" component={HomePage} /> */}

      {/* <HomePage /> */}
      <SearchPage />
      {/* <Test /> */}


    </div>
  );
}

export default App;
