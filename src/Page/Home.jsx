import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const state = (state) => state.login.login

export function Home () {

    const {token} = useSelector(state)


    return <>
    
        {token === "" ? <div className="home">
                <h1>Щоб почати <br/> Увійдіть до системи</h1>   
            </div> : 
            <Navigate to='contacts' replace={true}/>}
    
    </>
} 