import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Liste from "./components/liste";
import Description from "./components/description";
import styled from "styled-components";
import GlobalStyle from "./Style/GlobalStyle";

const AppStyles = styled.div`
  display: grid;
  margin: 0;
  padding: 0;
  height: 100vh;

  grid-template-areas:
    "nav head"
    "nav  main";
  grid-template-rows: 4em 1fr;
  grid-template-columns: 10em 1fr;

  .sidebar {
    background: #0596de;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: white;
    display: flex;
    font-weight: bold;
    grid-area: nav;
    justify-content: center;
    padding-top: 2em;
    z-index: 5;
  }

  nav {
    background: white;
    font-weight: bold;
    grid-area: head;
    margin: 0;
    padding: 1em 2em 0.2em;

    a {
      color: #428BCA;
    }
  }

  .main {
    grid-area: main;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppStyles>
        <div className="sidebar">Nivantis</div>
        <nav>
          <ul>
            <li>
              <Link to="/liste">← Liste des médicaments</Link>
            </li>
          </ul>
        </nav>

        <Switch className="main">
          <Route path="/liste">
            <Liste />
          </Route>

          <Route path="/description">
            <Description />
          </Route>
        </Switch>
      </AppStyles>
    </Router>
  );
}

export default App;
