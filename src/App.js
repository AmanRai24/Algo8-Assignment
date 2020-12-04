import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Contact from './components/pages/contact';
import { FooterContainer } from "./containers/footer";
import Blogs from './components/Blogs/index';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        {/* <Route path='/' exact component={Post} /> */}
        {/* <Route path='/post' component={Post} /> */}
        <Route path='/contact' component={Contact} />
      </Switch>
      <Blogs/>
      <FooterContainer/>
    </Router>
  );
}

export default App;
