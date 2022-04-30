import logo from './logo.svg';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path = "/" component={HomeScreen} exact />
      </Switch>
    </Router>
  );
}

export default App;
