import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

import cssHeader from "./Header.module.css"


export function Header () {
    return <>
        <div className={cssHeader.headerConteiner}>
            <h1 className={cssHeader.logo}>PhoneBook</h1>
            <nav className={cssHeader.headerNav}>
                <NavLink  to='/'>Contacts</NavLink>
                <NavLink to='login'>Login</NavLink>
            </nav>
        </div>

        <Suspense>
            <Outlet/>
        </Suspense>
    </>
}