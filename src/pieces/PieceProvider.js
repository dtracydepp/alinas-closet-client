import React, { useState } from "react"

export const PieceContext = React.createContext()

export const PieceProvider = (props) => {
    const [ pieces, setPieces ] = useState([])

    const getPieces = () => {
        return fetch("http://localhost:8000/pieces", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("ac_user_id")}`
            }
        })
            .then(response => response.json())
            .then(setPieces)
    }


    const getPiecesById = (pieceId) => {
        return fetch(`http://localhost:8000/pieces/${pieceId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem('ac_user_id')}`
            }
        })
            .then(res => res.json())
    }


    

      
      const deleteSavedPiece = pieceId => {
        return fetch(`http://localhost:8000/userpieces/${pieceId}/`, {
            method: "DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("ac_user_id")}`
            }
        })
            .then(response => response.json())
            .then(getPieces)
    }
   
    return (
        <PieceContext.Provider value={{ pieces, getPieces, getPiecesById, deleteSavedPiece }} >
            { props.children }
        </PieceContext.Provider>
    )

    }