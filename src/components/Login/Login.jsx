import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import cssLogin from "./Login.module.css"
import { loginUserThunk } from "store/login/thunkLogin"
import { Loading } from "components/Loading/Loading"
import { useEffect } from "react"

const state = (state) => { return state.login.login}

export const Login = () => {
    const {error, loading}  = useSelector(state)
    const dispatch = useDispatch()

    useEffect(() => {
        if(error) {
            alert('Під час запиту винекла помилка. Перевірте дані вводу')
        }
    },[error])
    
    

    const handleLogin = (e) => {
        e.preventDefault();

        const user = {
            email: e.currentTarget.elements.email.value,
            password: e.currentTarget.elements.password.value
        }

        e.currentTarget.elements.email.value = ''
        e.currentTarget.elements.password.value = ''

        dispatch(loginUserThunk(user))
    }

    return <>
        {loading && <Loading />}

        <div className={cssLogin.loginConteiner}>
            <h1 className={cssLogin.loginTitel}>Login</h1>

            <form onSubmit={handleLogin} >
                <label >
                    Email
                    <input name="email" type="text" placeholder="Emai@mail.com" required/>
                </label>
                <label >
                    Password
                    <input name='password' type="password" minLength="6" placeholder="qwer1234" required/>
                </label>

                <button className={cssLogin.loginButton} type="submit">Login</button>
            </form>

            <div className={cssLogin.link}>
                <NavLink className={cssLogin.linkElement} to='/'>Home</NavLink>
                <NavLink className={cssLogin.linkElement} to='/register'>Register</NavLink>
            </div>
            
        </div>
    </>
}