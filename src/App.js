import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import { FooterContainer } from "./containers/footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <FooterContainer/>
    </Router>
  );
}

export default App;
