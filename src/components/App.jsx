
import { Contacts } from "Page/Contacts";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header";
import { Login } from "Page/Login";
import { Register } from "Page/Register";

export function App () {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Contacts />}/>
                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />}/>
            </Route>
        </Routes>

        
    )

}
