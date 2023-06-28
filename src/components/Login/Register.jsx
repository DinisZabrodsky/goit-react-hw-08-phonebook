import { NavLink } from "react-router-dom"

import cssLogin from '../Login/Login.module.css'

export const Register = () => {
    return <>
        <div className={cssLogin.loginConteiner}>
            <h1 className={cssLogin.loginTitel}>Register</h1>

            <form >
                <label>
                    Name
                    <input type="text" placeholder="Bob" required/>
                </label>
                <label >
                    Email
                    <input type="text" placeholder="Emai@mail.com" required/>
                </label>
                <label >
                    Password
                    <input type="password" minlength="4" placeholder="1234" required/>
                </label>

                <button className={cssLogin.loginButton}>Sing Up</button>
            </form>

            <div className={cssLogin.link}>
                <NavLink className={cssLogin.linkElement} to='/'>Home</NavLink>
                <NavLink className={cssLogin.linkElement} to='/register'>Register</NavLink>
            </div>
        </div>
</>}