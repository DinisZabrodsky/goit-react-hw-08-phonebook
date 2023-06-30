
import { ContactsPage } from "Page/ContactsPage";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header";
import { LoginPage } from "Page/LoginPage";
import { RegisterPage } from "Page/RegisterPage";
import { PublicRoute } from "./PublicRoute/PublicRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute ";
import { Home } from "Page/Home";

export function App () {
    return (
        <Routes>
            <Route path="/" element={<Header />}>

                <Route index element={<Home />}/>

                <Route path="contacts" element={<PrivateRoute>
                    <ContactsPage />
                </PrivateRoute>}/>

            </Route>

            <Route path="login" element={<PublicRoute>
                    <LoginPage />
            </PublicRoute>}/>

            <Route path="register" element={<PublicRoute>
                    <RegisterPage />
            </PublicRoute>}/>
        </Routes>

        
    )

}
