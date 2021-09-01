import React from "react"
import Navbar from "./component/Navbar"
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from "./component/pages/Home";
import Products from "./component/pages/Products"
import Services from "./component/pages/Services"
import SignUp from "./component/pages/SignUp"

function App() {
  return (
 <>
  <Router>
     <Navbar/>
     
      <Switch>
      <Route  exact path='/' component={Home}/>
      <Route  exact path='/Products' component={Products}/>
      <Route  exact path='/Service' component={Services}/>
      <Route exact path="/SignUp" component={SignUp}/> 
               
       </Switch> 
  </Router >
 </>
  );
}

export default App;
