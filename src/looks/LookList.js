import React, { useContext, useEffect } from "react"
import { LookContext } from "./LookProvider.js"





export const LookList = () => {

  //  // The useHistory hook tells React which route to visit. Tells React to render the look form component.
 

  // This state changes when `getLooks()` is invoked below
  const { getLooks } = useContext(LookContext)


  //useEffect - reach out to the world for something - API call for the looks; wil only run one time at intial render because array is empty
  useEffect(() => {
    //   console.log("LookList: useEffect - getLooks")
    getLooks()
    console.log(getLooks)

  }, [])


  return (
    <div className="looks">
      <h3>Looks</h3>
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