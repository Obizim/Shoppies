import React from 'react'
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Movies from './components/Movies';
import Nominees from './components/Nominees';
import GlobalContextProvider from './context.js/GlobalContext';


function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Movies}></Route>
          <Route path="/nominees" component={Nominees}></Route>     
        </Switch>
        <Footer />
      </Router>
      </GlobalContextProvider>
  );
}

export default App;
