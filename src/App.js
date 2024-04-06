import './App.css';

import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  const Pagesize = 20;
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/"><News key="general" Pagesize={Pagesize} country="in" category="general" /></Route>
          <Route exact path="/business"><News key="business" Pagesize={Pagesize} country="in" category="business" /></Route>
          <Route exact path="/entertainment"><News key="entertainment" Pagesize={Pagesize} country="in" category="entertainment" /></Route>
          <Route exact path="/general"><News key="general" Pagesize={Pagesize} country="in" category="general" /></Route>
          <Route exact path="/health"><News key="health" Pagesize={Pagesize} country="in" category="health" /></Route>
          <Route exact path="/science"><News key="science" Pagesize={Pagesize} country="in" category="science" /></Route>
          <Route exact path="/sports"><News key="sports" Pagesize={Pagesize} country="in" category="sports" /></Route>
          <Route exact path="/technology"><News key="technology" Pagesize={Pagesize} country="in" category="technology" /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App