import React, { useContext, useEffect } from "react"
import { UserPieceContext } from "../users/UserPieceProvider.js"
import {PieceCard} from "./PieceCard.js"



export const SavedPieceList = ( props ) => {
    const { userpieces,getUserPieces,  } = useContext(UserPieceContext)
    // not sure if I need pieces, getPieces or userpieces or both??


    // Initialization effect hook..
    useEffect(() => {
        getUserPieces()
       
    }, [])
// returning all of the saved pieces of the current user
    const currentUserSavedPieces = userpieces.filter(up=>parseInt(up.userId)===parseInt(localStorage.getItem("ac_user_id")))
//  console.log(currentUserSavedPieces)
//  console.log(localStorage.getItem("ac_user_id"))
    return (

        <div className="savedpieces">
            <h1>Favorite Pieces</h1>


            {
                // mapping through all and filtering out saved pieces by user
            currentUserSavedPieces.map(piece =>{
                {console.log(piece)}
              return  <>
                {/* props.history.push changing the url when the button is clicked and passing the id of the piece to the url */}
             <PieceCard key={piece.id} piece={piece} />
            
             <button> Add Note </button>
             </>})
            }
            
        </div>

    )

}