import React, { useContext, useEffect, useState } from "react"
import { UserPieceContext } from "../users/UserPieceProvider.js"
import { useHistory, useParams } from 'react-router-dom';
import "./Notes.css"

export const NoteForm = () => {
  const { addNote, updateUserPiece, getUserPieces, getUserPiecesById, note } = useContext(UserPieceContext)

  //for edit, hold on to state of userpieces in this view

  const [userpieces, setUserPieces] = useState({
    note: "",
    is_favorite: "",
    piece: 0,
    user: 0,
    id:0
  });

  //wait for data before button is active. Look at the button to see how it's setting itself to disabled or not based on this state
  const [isLoading, setIsLoading] = useState(true);

  // Now that the form can be used for editing as well as adding a note , you need access to the userpiece id for fetching the userpiece you want to edit
  const { userpieceId } = useParams();
  const history = useHistory();

  /*
  Reach out to the world and get userpiece state
  on initialization.
  */
  useEffect(() => {
    getUserPieces().then(() => {
      if (userpieceId) {
        getUserPiecesById(userpieceId)
          // giving whatever I grabbed from the database
          .then(userpieces => {
            setUserPieces(userpieces)
            // isLoading state variable set to false so button can't be clicked
            setIsLoading(false)
          })
      } else {
        setIsLoading(false)
      }
    })
  }, [])
  //when a field changes, update state. The return will re-render and display based on the values in state

  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newUserPiece = { ...userpieces }
    let selectedVal = event.target.value
    // forms always provide values as strings. But we want to save the ids as numbers. 
    if (event.target.id.includes("userpieceId")) {
      selectedVal = parseInt(selectedVal)
    }
    /* UserPiece is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newUserPiece[event.target.id] = selectedVal
    // update state
    setUserPieces(newUserPiece)
  }

  const handleSaveNote = () => {
    if (userpieceId) {
      //PUT - update
      updateUserPiece({
        note: userpieces.note, 
        is_favorite: userpieces.is_favorite,
        piece: userpieces.pieceId,
        user: userpieces.userId,
        id: userpieces.id,

      })
    // not sure about path
        .then(() => history.push("/saved"))
    } else {
      //disable the button - no extra clicks
      setIsLoading(true);
      // This is how we check for whether the form is being used for editing or creating. If the URL that got us here has an id number in it, we know we want to update an existing record of a category
      
      {
        //PUT - add
        addNote({
        note: userpieces.note, 
        is_favorite: userpieces.is_favorite,
        piece: userpieces.piece.pieceId,
        user: userpieces.userId,
        id: userpieces.id,
        }

        )
          .then(() => history.push("/saved"))
        //   not sure abt this path
      }
    }
  }

console.log(userpieces)

  return (
    <form className="note__form">
      <h2 className="noteForm__title">New Note</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="userpiece__note">Note:</label>
          <input className="userpiece__note" type="text" id="note" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Note" value={userpieces.note} />
        </div>
      </fieldset>


      <button className="button save_new_note_button"
        disabled={isLoading}
        onClick={event => {
          event.preventDefault() // Prevent browser from submitting the form and refreshing the page
          handleSaveNote()
        }}>
        {userpieceId ? "Save Note" : "Edit Note"}</button>
           
    </form>
  )
}