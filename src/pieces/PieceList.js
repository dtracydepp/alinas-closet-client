import React, {useContext, useEffect} from "react"
import {PieceContext} from "./PieceProvider.js"
import {PieceCard} from "./PieceCard.js"
import { useHistory } from "react-router-dom"

export const PieceList = () => {

  //  // The useHistory hook tells React which route to visit. Tells React to render the location form component.
  const history = useHistory()

    // This state changes when `getItemss()` is invoked below
    const { pieces, getPieces } = useContext(PieceContext)
  
    //useEffect - reach out to the world for something - API call for the locations; wil only run one time at intial render because array is empty
    useEffect(() => {
    //   console.log("ItemList: useEffect - getItems")
      getPieces()

    }, [])
  
  
    return (
        <div className="pieces">
            <h3>Pieces</h3>
          {/* {console.log("PiecesList: Render", pieces)} */}
          
           { 
            pieces.map((piece) => {
              //   key and item become properties on the object passed in as in argument
              return <PieceCard key={piece.id} piece={piece} />
            })
        } 
        </div>
      )
    } 