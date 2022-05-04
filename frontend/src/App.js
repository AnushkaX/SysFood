import logo from './logo.svg';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import Login from './screens/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path = "/" component={HomeScreen} exact />
      </Switch>
      <Switch>
        <Route path = "/login" component={Login} exact />
      </Switch>
    </Router>
  );
}

export default App;
