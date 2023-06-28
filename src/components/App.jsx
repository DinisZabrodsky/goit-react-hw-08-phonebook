
import { ContactsPage } from "Page/ContactsPage";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header";
import { LoginPage } from "Page/LoginPage";
import { RegisterPage } from "Page/RegisterPage";

export function App () {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<ContactsPage />}/>
            </Route>
            <Route path="login" element={<LoginPage />}/>
            <Route path="register" element={<RegisterPage />}/>
        </Routes>

        
    )

}
