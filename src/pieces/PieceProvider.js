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

   
    
   
    return (
        <PieceContext.Provider value={{ pieces, getPieces, }} >
            { props.children }
        </PieceContext.Provider>
    )
}