import React, { useContext, useEffect } from "react"
import { PieceContext } from "./PieceProvider.js"
import { PieceCard } from "./PieceCard.js"
import { useHistory } from "react-router-dom"


export const TopList = () => {

  //  // The useHistory hook tells React which route to visit. Tells React to render the location form component.
  const history = useHistory()

  // This state changes when `getPieces()` is invoked below
  const { pieces, getPieces } = useContext(PieceContext)


  //useEffect - reach out to the world for something - API call for the locations; wil only run one time at intial render because array is empty
  useEffect(() => {
    //   console.log("PieceList: useEffect - getPieces")
    getPieces()

  }, [])


  return (
    <div className="tops">
      <h2>Tops</h2>
      {
          
        pieces.map(piece => {
          if (piece.category.id === 1) {
            //   key and item become properties on the object passed in as in argument
            return <PieceCard key={piece.id} piece={piece} />
          }
        })
      }
    </div>
  )

}


