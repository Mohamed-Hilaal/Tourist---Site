import React , {useState,useEffect}from 'react'
import {Link} from "react-router-dom"
import {Button }from './Button';
import "./Navbar.css"




 

function Navbar() {
    const [press,setpress] = useState(false);
    const [button,setbutton] = useState(false);
 
    const press1 =()=>setpress(!press);
    const closeMobileView =()=>setpress(false);

    const showbutton = ()=>{
        if(window.innerWidth <= 960){
            setbutton(false);
        }
        else{
            setbutton(true);
        }
    };

  useEffect(() => {
      showbutton();
  }, [])


   window.addEventListener("resize",showbutton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container" >
                    <Link to="/" className="navbar-logo" onClick={closeMobileView}>
                           REAL<i className="fab fa-typo3" ></i>
                    </Link>
                           <div className ="menu-icon" onClick={press1}>
                           <i className={press ? "fas fa-times" : "fas fa-bars"}/>
                         </div>
                        <ul  className={press ? "nav-menu active" : "nav-menu"} >
                            <li className="nav-item">
                             <Link to="/" className="nav-links" onClick = {closeMobileView}>
                             Home
                             </Link>
                            </li>
                            <li className="nav-item">
                             <Link to="/products" className="nav-links" onClick = {closeMobileView}>
                             Products
                             </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/Service" className="nav-links" onClick = {closeMobileView}>
                            Services
                            </Link>
                            </li>
                            <li >
                            <Link to="/SignUp" className="nav-links-mobile" onClick = {closeMobileView}>
                             Sign Up
                            </Link>
                            </li>
                        </ul>
                        {button && <Button buttonStyle ="btn--outline" >Sign Up</Button>}
                </div>
            </nav>
        </>
    );
}


export default Navbar
