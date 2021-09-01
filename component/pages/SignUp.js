import React from 'react'
import "../../App.css"  
import "../pages/SignUp.css"


function SignUp() {
    return (
        <div className="Login">
      <div className="login-page">
      <form className="login-form">
            <h1>Login</h1>
            <div className="login-input-email">
                    <input type="Email" placeholder='Your Email Id' className='login-email' />
            </div>
        <div className='logn-input-password'>
           <input type="text" placeholder="Password" name="password" className="login-password"/>
        </div>   
        </form>
         <small className="login-new">
             I Don't Have An Account
         </small>
      </div>
        </div>
    )
}
 
export default SignUp
