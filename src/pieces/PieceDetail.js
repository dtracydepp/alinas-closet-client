import React, { useContext, useEffect, useState } from "react"
import { PieceContext } from "./PieceProvider.js"
import { useParams, useHistory } from "react-router-dom"

export const PieceDetail = (props) => {
    // Need the getItemById and deleteItem data stored from fetch to use in this comp
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
        // setItems update function invoked to update state.
        setPieces(response)
      })
  }, [])


  // returns piece details with buttons
  return (
    <section className="piece">
      <h1> About This Piece</h1>
      <h3 className="piece__name">{piece.piece_name}</h3>
      <div className="piece__price">Price: {piece.price}</div>
      <div className="piece__size">Size: {piece.size}</div>
      <div className="piece__retailer">Retailer: {piece.retailer?.retailer_name}</div>
      
      <div>
      <button className="save__btn" onClick={() => { history.push(`/pieces/detail/${piece.id}`) }}>
        Save
          </button>
    <div>
      <button className="add__look__btn"
            // pushes the new entry into the history stack---redirecting to another route
                onClick={() => props.history.push("/looks")}>
                Add to Look
            </button> 
    </div>  
    <div>
      <button className="add__list__btn"
            // pushes the new entry into the history stack---redirecting to another route
                onClick={() => props.history.push("/lists")}>
                Add to List
            </button> 
    </div>  
      </div>
    </section>
  )
}