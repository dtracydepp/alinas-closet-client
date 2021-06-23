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

    const getUserPiecesById = (id) => {
        return fetch(`http://localhost:8000/userpieces/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem('ac_user_id')}`
            }
        })
            .then(res => res.json())


      }
    
    
      const addUserPiece = (userpiece) => {
        return fetch("http://localhost:8000/userpieces", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("ac_user_id")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userpiece)
        })
    }

    const updateUserPiece = userpiece => {
        return fetch(`http://localhost:8000/userpieces/${userpiece.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem('ac_user_id')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userpiece)
        })
            .then(getUserPieces)
    }

    const deleteSavedPiece = userpieceId => {
        return fetch(`http://localhost:8000/userpieces/${userpieceId}`, {
            method: "DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("ac_user_id")}`
            }
        })
            .then(getUserPieces)
    }
   
    return (
        <UserPieceContext.Provider value={{ userpieces, getUserPieces, getUserPiecesById, addUserPiece, deleteSavedPiece, updateUserPiece}} >
            { props.children }
        </UserPieceContext.Provider>
    )
}