import React from 'react';
import './App.css';

//import pages from pages directory
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

//import Rout
import { Route, Switch } from 'react-router-dom'

// import from components
import Navbar from "./components/Navbar";

//https://www.youtube.com/watch?v=ScDWrogElmo&feature=youtu.be&fbclid=IwAR0aHFJaBtCjfhFdwNXm5025vKEVe03WQEMziu7cyaxEOaa-PvI8wnp6Gtc
//3:19:09

function App() {
  return (
    <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms" component={Rooms} />
            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route component={Error} />
        </Switch>
    </>
  );
}

export default App;
