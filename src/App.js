import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

const loadingBlock = (
  <React.Fragment>
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Loading...</h2>
  </React.Fragment>
)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-navbar">
          <ul>
            <li>
            <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="route-content">
        <Router>
          <Suspense fallback={loadingBlock}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </Suspense>
        </Router>
      </section>

    </div>
  );
}

export default App;
