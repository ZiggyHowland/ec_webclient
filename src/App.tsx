import React from 'react';
import './App.css';
import { getGlobalVariables } from './environment.js';
import { Switch, Route  } from 'react-router-dom';
import { Router } from 'react-router';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Welcome from './Welcome/Welcome';
import TestHello from './Tests/TestHello';
import TestSigbjorn from './Tests/TestSigbjorn';
import Users from './User/Users';
import Environments from './Environment/Environments';
import Environment from './Environment/Environment';
import Configurations from './Configuration/Configurations';
import ConfigurationAddEdit from './Configuration/ConfigurationAddEdit';
import Footer from './Footer/Footer';
import EufemiaExamples from './Eufemia/Examples';
import User from './User/User';



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

          <Route path="/hello">
            <TestHello />            
          </Route>

          <Route exact path="/configurations" component={Configurations} />
          <Route path="/configurations/add" component={ConfigurationAddEdit} />
          <Route path="/configurations/edit/:id" component={ConfigurationAddEdit} />

          <Route path="/users">
            <Users />
          </Route>

          <Route path="/user/:id">
            <User/>
          </Route>

          <Route path="/environments">
            <Environments />            
          </Route>

          <Route path="/environment/:id">
            <Environment />            
          </Route>

          <Route path="/eufemia/examples">
            <EufemiaExamples />            
          </Route>

        </Switch>
        </article>
        </section>

      
        <Footer />
      
    </div>
  );
}

export default App;





