import React, { useContext, useEffect, useState } from "react"
import { UserPieceContext } from "../users/UserPieceProvider.js"
import { PieceContext } from "./PieceProvider.js" 
import {PieceCard} from "./PieceCard.js"
import { useParams, useHistory } from "react-router-dom"
import "./Pieces.css"


export const SavedPieceList = () => {

    const { userpieces, getUserPieces, getUserPiecesById, deleteSavedPiece, favUserPiece} = useContext(UserPieceContext)
    const { getPiecesById } = useContext(PieceContext)
    // not sure if I need pieces, getPieces or userpieces or both??
    const history = useHistory()
    const [piece, setPieces] = useState({})

    // useParams hook that allows me to extract value of the parameter from the URL, here I need the value of pieceId
  const { pieceId } = useParams();

  
  useEffect(() => {
    getUserPieces(pieceId)
      .then((response) => {
        // setPieces update function invoked to update state.
        setPieces(response)
      })
  }, [])

    // function to delete userpiece object
    const handleDelete = (userpiecesId) => {
        // deleteSavedPiece function and passing the userpiece.id so only the piece on the piece card selected will be deleted.
        deleteSavedPiece(userpiecesId)
            .then(() => {
                // using useHistory to push to new route
                history.push("/saved")
            })
    }

    // function to fav userpiece

    const handleFav = (userpiecesId,piece,userpiece) => {
        if (userpiecesId) {
          //PUT - update
          favUserPiece({
                "note": userpiece.note,
                "id": userpiecesId,
                "is_favorite": true,
                "piece": piece,
                "user": parseInt(localStorage.getItem("user_id"))
    
          })
            .then(() => history.push("/saved"))
        
                 
            }
        
    }

    // mapping through all and filtering out saved userpieces
    // returning all of the saved pieces of the current user
    const currentUserSavedPieces = userpieces.map(up => {
        if (up.id === up.piece.id) {
        }
        // console.log(currentUserSavedPieces)

        return (

            <div className="savedpieces">

                {/* props.history.push changing the url when the button is clicked and passing the id of the piece to the url */}
                <PieceCard key={up.piece.id} piece={up.piece} />

                <div>
                    <button className={up.is_favorite?'is_favorite fav__btn':'fav__btn'} onClick={()=>handleFav(up.id,up.piece.id,up)}> ♥ 
                        Favorite
                    </button>
                </div>

                <div>
                    <button className="note__btn" onClick={() => { history.push(`/userpieces/create/${up.id}`) }}>
                        Add/Edit Note </button>
                </div>

                <div>
                    <button className="delete__btn" onClick={()=>handleDelete(up.id)}> 
                        Delete
                    </button>
                </div>
                <section className="savedpieces__notes">
                <div className="userpiece__note">Note:{up.note}</div>
                

                </section>
            </div>

        )
    })
    return (<div className="pieces__saved"> <h1>Saved Pieces{currentUserSavedPieces.count}</h1>
        {currentUserSavedPieces}</div>)

        


}