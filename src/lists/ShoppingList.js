import React, { useContext, useEffect } from "react"
import { ShoppingListContext } from "./ListProvider.js"





export const ShoppingList = () => {

  //  // The useHistory hook tells React which route to visit. Tells React to render the look form component.
 

  // This state changes when `getLists()` is invoked below
  const { getLists } = useContext(ShoppingListContext)


  //useEffect - reach out to the world for something - API call for the looks; wil only run one time at intial render because array is empty
  useEffect(() => {
    //   console.log("ShoppingList: useEffect - getLists")
    getLists()
    console.log(getLists)

  }, [])


  return (
    <div className="shopping lists">
      <h3>Shopping Lists</h3>
      {/* {
        pieces.map(piece => {
          if (piece.category.id === 3) {
            //   key and item become properties on the object passed in as in argument
            return <PieceCard key={piece.id} piece={piece} />

          }
        })
      } */}
    </div>
  )

}