import React from "react";
import './App.css';
import Footer from './components/Footer/Footer';
import Movie from "./components/Movie"
import Navbar from './components/Navbar';
import Poster from './components/Poster';
import Video from './components/Video';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./components/Users/Login";

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route path="/signup">
      <Navbar/>
      <h1>hey im a signup</h1>
      <Footer/>
      </Route>
      <Route path="/login">
       <Login/>   
      </Route>
      <Route path="/movie">
      <Navbar/>
        <Video/>
        <Poster/>
        <Footer/>
      </Route>
      <Route path="/">
      <Navbar/>
        <Poster/>
        <Movie/>
        <Footer/>
      </Route>
    </Switch>
    </div>
    </Router>
  );
}


export default App;
