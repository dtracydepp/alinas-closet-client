import React, { useState } from "react"

export const PieceContext = React.createContext()

export const UserProvider = (props) => {
    const [ users, setUsers ] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8000/users", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("ac_user_id")}`
            }
        })
            .then(response => response.json())
            .then(setUsers)
    }

    const getUsersById = (userId) => {
        return fetch(`http://localhost:8000/users/${userId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem('ac_user_id')}`
            }
        })
            .then(res => res.json())


      }
    
   
    return (
        <UserContext.Provider value={{ users, getUsers, getUsersById }} >
            { props.children }
        </UserContext.Provider>
    )
}