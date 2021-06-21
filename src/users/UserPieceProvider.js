import React, { useState } from "react"

export const UserPieceContext = React.createContext()

export const UserPieceProvider = (props) => {
    const [ userpieces, setUserPieces ] = useState([])

    const getUserPieces = () => {
        return fetch("http://localhost:8000/userpieces", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("ac_user_id")}`
            }
        })
            .then(response => response.json())
            .then(setUserPieces)
    }

    const getUserPiecesById = (userId) => {
        return fetch(`http://localhost:8000/userpieces/${userId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem('ac_user_id')}`
            }
        })
            .then(res => res.json())


      }
    
   
    return (
        <UserPieceContext.Provider value={{ userpieces, getUserPieces, getUserPiecesById }} >
            { props.children }
        </UserPieceContext.Provider>
    )
}