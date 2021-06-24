import React, { useContext, useEffect, useState } from "react"
import { UserPieceContext } from "../users/UserPieceProvider.js"
import { PieceContext } from "./PieceProvider.js"
import { useParams, useHistory } from "react-router-dom"
import "./Pieces.css"


export const PieceDetail = () => {

    // Need the getItemById and deleteItem data stored from fetch to use in this comp
  const {  addUserPiece } = useContext(UserPieceContext)  
  const { getPiecesById } = useContext(PieceContext)
// useState will hold and set the state of the piecess object. Pieces will hold the data, setPieces will modify the state of the pieces object when invoked.
  const [piece, setPieces] = useState({})

  // useParams hook that allows me to extract value of the parameter from the URL, here I need the value of pieceId
  const { pieceId } = useParams();
  // useHistory hook allows me to tell React which route
  const history = useHistory();


//  useEffect invoked--api call to getPiecesById, passed pieceId  
  useEffect(() => {
    getPiecesById(pieceId)
      .then((response) => {
        // setPieces update function invoked to update state.
        setPieces(response)
      })
  }, [])

  const handleClickSavePiece = (event) => {
    const userPiece = {
    "note":"",
    "is_favorite": false,
    "piece": parseInt(pieceId),
    "user": parseInt(localStorage.getItem("user_id")),


    }
      //invoke addNote passing note and itemId arguments. So the new note added will be specific to the item selected
      //once complete, change the url and display the friend list
      addUserPiece(userPiece)
      // pushes the new entry into the history stack---redirecting to another route
      .then(() => history.push("/saved"))
    }

  // returns piece details with buttons
  return (
    <section className="piece">
      <h1> About This Piece</h1>
      <h3 className="piece__name">{piece.piece_name}</h3>
      <img src= {piece.imageurl} alt=""/>
      <div className="piece__price">Price: ${piece.price}</div>
      <div className="piece__size">Size: {piece.size}</div>
      <div className="piece__retailer">Retailer: {piece.retailer?.retailer_name}</div>
      {/* POST method in piece provider, handleSave function */}
      <div>
      <button className="save__btn" onClick={()=>handleClickSavePiece()}>
        Save Piece
          </button>
    </div>    
    </section>
  )
}