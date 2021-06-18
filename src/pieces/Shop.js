import React, { useContext, useEffect }  from "react"
import { PieceCard } from "./PieceCard.js"
import { PieceContext } from "./PieceProvider.js"
import { useHistory } from "react-router-dom"


// // SortFriends function returns a Sort by Friends button and when clicked push to "/allfriends" page.
export const Shop = (props) => {

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
        <>
            <div>
              <h2>Shop Tops</h2>
              <button className="shop_tops"
            // pushes the new entry into the history stack---redirecting to another route
                onClick={() => props.history.push("/tops")}>
                View Tops
            </button>

              {
          
                pieces.slice(0,2).map(piece => {
                 if (piece.category.id === 1) {
              //   key and item become properties on the object passed in as in argument
              return <PieceCard key={piece.id} piece={piece} />
            }
          })
        }
           
            </div>

            <div>
              <h2>Shop Bottoms</h2>
              <button className="shop_bottoms"
            // pushes the new entry into the history stack---redirecting to another route
                onClick={() => props.history.push("/bottoms")}>
                View Bottoms
            </button>

              {
          
                pieces.slice(4,6).map(piece => {
                     if (piece.category.id === 2) {
              //   key and item become properties on the object passed in as in argument
              return <PieceCard key={piece.id} piece={piece} />
            }
          })
        }
           
            </div>

            <div>
              <h2>Shop Sets</h2>
              <button className="shop_sets"
            // pushes the new entry into the history stack---redirecting to another route
                onClick={() => props.history.push("/sets")}>
                View Sets
            </button>

              {
          
                 pieces.slice(18,20).map(piece => {
                    if (piece.category.id === 3) {
              //   key and item become properties on the object passed in as in argument
              return <PieceCard key={piece.id} piece={piece} />
            }
          })
        }
            
            </div>
        </>
    )
}