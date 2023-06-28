import { NavLink } from "react-router-dom"

import cssLogin from "./Login.module.css"

export const Login = () => {
    return <>
        <div className={cssLogin.loginConteiner}>
            <h1 className={cssLogin.loginTitel}>Login</h1>

            <form >
                <label >
                    Email
                    <input type="text" placeholder="Emai@mail.com" required/>
                </label>
                <label >
                    Password
                    <input type="password" minlength="4" placeholder="1234" required/>
                </label>

                <button className={cssLogin.loginButton}>Login</button>
            </form>

            <div className={cssLogin.link}>
                <NavLink className={cssLogin.linkElement} to='/'>Home</NavLink>
                <NavLink className={cssLogin.linkElement} to='/register'>Register</NavLink>
            </div>
            
        </div>
    </>
}