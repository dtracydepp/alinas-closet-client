import { Redirect } from "react-router";

export const LogOut =() =>{

    localStorage.clear()

    return (
        <Redirect to="login"/>
    )


}