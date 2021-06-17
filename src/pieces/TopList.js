import React, {useContext, useEffect} from "react"
import {PieceContext} from "./PieceProvider.js"
import {PieceCard} from "./PieceCard.js"
import { useHistory } from "react-router-dom"
import { CategoryContext} from "../categories/CategoryProvider.js"

export const TopList = () => {

  //  // The useHistory hook tells React which route to visit. Tells React to render the location form component.
  const history = useHistory()

    // This state changes when `getPieces()` is invoked below
    const { pieces, getPieces } = useContext(PieceContext)
    const { categories, getCategories } = useContext(CategoryContext)
  
    //useEffect - reach out to the world for something - API call for the locations; wil only run one time at intial render because array is empty
    useEffect(() => {
    //   console.log("PieceList: useEffect - getPieces")
      getPieces()

    }, [])
   
//   if categoryId === "" then, else ...
  
    return (
        <div className="tops">
            <h3>Tops</h3>
          {/* {console.log("TopsList: Render", tops)} */}
          
          {
            pieces.filter(piece => {(piece.categoryId === 1)
            
    
                //   key and item become properties on the object passed in as in argument
              return  <PieceCard key={piece.id} piece={piece} />
            })
            
            }    
            </div>


    )}

      
    