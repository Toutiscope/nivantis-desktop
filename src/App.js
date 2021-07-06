import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import Liste from './componant/liste'
import Description from './componant/description'

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/liste">Liste médicaments</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/liste">
          <Liste />
        </Route>

        <Route path="/description">
          <Description />
        </Route>

      </Switch>
    </div>
  </Router>
  );
}

export default App;
