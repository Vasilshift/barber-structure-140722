import React from "react";
//import './App.css';
//import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Lookbook from "./pages/home/lookbook";
//import {LayoutFour} from "./components/Layout";
//import {Navbar} from "react-bootstrap";
//import Navbar from "./components/Navbar";
import Header from "./components/Header/Header";
import {LayoutFour} from "./components/Layout";
//import HeaderOne from "./components/Header/HeaderOne";
function App() {
  return (
      <>
        {/*<BrowserRouter>*/}
            <Header />
            <LayoutFour></LayoutFour>
        {/*    <Switch>*/}
        {/*        <Route>*/}

        {/*        </Route>*/}
        {/*    </Switch>*/}
        {/*</BrowserRouter>*/}


      </>
  );
}

export default App;
