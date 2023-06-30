import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

import cssHeader from "./Header.module.css"
import { useDispatch, useSelector } from "react-redux";
import { logOutUserThunk } from "store/login/thunkLogin";

const state = (state) => state.login.login

export function Header () {
    const {token, name} = useSelector(state)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logOutUserThunk())
    }

    return <>
        <div className={cssHeader.headerConteiner}>
            <h1 className={cssHeader.logo}>PhoneBook</h1>
            <nav className={cssHeader.headerNav}>

                {token === "" ? <NavLink className={cssHeader.headerNavLink} to='login'>Login</NavLink> :
                <p className={cssHeader.headerNavLink}  onClick={handleLogOut}>Logout</p> }

                {name !== '' && <p className={cssHeader.headerNavName}>{name}</p> }
                
            </nav>
        </div>

        <Suspense>
            <Outlet/>
        </Suspense>
    </>
}