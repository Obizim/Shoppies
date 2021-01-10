import React from 'react'
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Movies from './components/Movies';
import Nominees from './components/Nominees';


function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Movies}></Route>
          <Route path="/nominees" component={Nominees}></Route>     
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
