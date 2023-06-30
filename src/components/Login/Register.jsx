import { NavLink } from "react-router-dom"

import cssLogin from '../Login/Login.module.css'
import { useDispatch, useSelector } from "react-redux"
import { registerUserThunk } from "store/login/thunkLogin"
import { Loading } from "components/Loading/Loading"
import { useEffect } from "react"

const state = (state) => { return state.login.login}

export const Register = () => {
    const dispatch = useDispatch()
    const {error, loading}  = useSelector(state)
    

    useEffect(() => {
        if(error) {
            alert('Під час запиту винекла помилка. Перевірте дані вводу')
        }
    },[error])

    const handleSubmitRegister = (e) => {
        e.preventDefault()

        const newUser = {
            name: e.currentTarget.elements.name.value,
            email: e.currentTarget.elements.email.value,
            password: e.currentTarget.elements.password.value
        }

        dispatch(registerUserThunk(newUser))
    }

    return <>
        {loading && <Loading />}

        <div className={cssLogin.loginConteiner}>
            <h1 className={cssLogin.loginTitel}>Register</h1>

            <form onSubmit={handleSubmitRegister}>
                <label >
                    Name
                    <input name="name" type="text" placeholder="Bob" required/>
                </label>
                <label >
                    Email
                    <input name="email" type="text" placeholder="Emai@mail.com" required/>
                </label>
                <label >
                    Password
                    <input name='password' type="password" minLength="6" placeholder="qwer1234" required/>
                </label>

                <button className={cssLogin.loginButton} type='submit'>Sing Up</button>
            </form>

            <div className={cssLogin.link}>
                <NavLink className={cssLogin.linkElement} to='/'>Home</NavLink>
                <NavLink className={cssLogin.linkElement} to='/login'>Login</NavLink>
            </div>
        </div>
</>}