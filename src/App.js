import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './components/body/sections/home';
import LocationStore from './components/body/sections/locationStore/locationStore';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="circolo-desenfocado"></div>
        <Navbar></Navbar>
          
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
