import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { UserPieceContext } from "../users/UserPieceProvider.js"
import { PieceCard } from "./PieceCard.js"



export const SavedPieceList = () => {

    const { userpieces, getUserPieces, deleteSavedPiece} = useContext(UserPieceContext)
    // not sure if I need pieces, getPieces or userpieces or both??
    const history = useHistory()

    // Initialization effect hook..
    useEffect(() => {
        getUserPieces()

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
    // mapping through all and filtering out saved userpieces
    // returning all of the saved pieces of the current user
    const currentUserSavedPieces = userpieces.map(up => {
        if (up.id === up.piece.id) {
        }
        // console.log(currentUserSavedPieces)

        return (

            <div className="savedpieces">
                <h1>Saved Pieces</h1>

                {/* props.history.push changing the url when the button is clicked and passing the id of the piece to the url */}
                <PieceCard key={up.piece.id} piece={up.piece} />

                <div>
                    <button className="note__btn" onClick={() => { history.push(`/userpieces/create/${up.id}`) }}>
                        Add Note </button>
                </div>

                <div>
                    <button className="delete__btn" onClick={()=>handleDelete(up.id)}> 
                        Delete
                    </button>
                </div>
                <section className="savedpieces__notes">
                <div className="userpiece__note">Note:{up.note}</div>
                <div className="userpiece__favorite">Favorite: {up.is_favorite}</div>
                </section>
            </div>

        )
    })
    return (currentUserSavedPieces)

        


}