import React from 'react';
import './App.css';
import { getGlobalVariables } from './environment.js';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Welcome from './Welcome/Welcome';
import TestSigbjorn from './Tests/TestSigbjorn';
import TestSalim from './Tests/TestSalim';
import TestPetter from './Tests/TestPetter';


function App() {
  {/* Source: https://www.w3schools.com/html/html_layout.asp */}

  return (
    <div className="App">
      <Header appname={getGlobalVariables().appname} />
      <section>
        <Menu />

        <article>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>

          <Route path="/sigbjorn">
            <TestSigbjorn />            
          </Route>

          <Route path="/salim">
            <TestSalim />            
          </Route>

          <Route path="/petter">
            <TestPetter />            
          </Route>

        </Switch>
        </article>
        

        </section>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;





