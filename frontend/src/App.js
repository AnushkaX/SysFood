import logo from './logo.svg';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import Login from './screens/Login';
import Register from './screens/Register';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path = "/" component={HomeScreen} exact />
        <Route path = "/login" component={Login} exact />
        <Route path = "/register" component={Register} exact />
      </Switch>
    </Router>
  );
}

export default App;
