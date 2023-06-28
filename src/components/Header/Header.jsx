import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";


export function Header () {
    return <>
        <div>
            <NavLink to='/'>Contacts</NavLink>
            <NavLink to='login'>Login</NavLink>
            <NavLink to='register'>Register</NavLink>
        </div>

        <Suspense>
            <Outlet/>
        </Suspense>
    </>
}