import React, { useState, useContext, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { LookContext } from "../looks/LookProvider.js"


export const LookForm = () => {

    const { getLookById, updateLook } = useContext(LookContext)

    const [looks, setLooks] = useState({
        look_name: "",
    });

    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    const { lookId } = useParams();

    const handleControlledInputChange = (event) => {
        const newLook = { ...looks }
        
        newLook[event.target.id] = event.target.value
       
        setLooks(newLook)
      }

    const handleSaveLook = () => {

        if (looks.look_name === "") {
            window.alert("Please name your look!")
          } else {
            setIsLoading(true);
  
        if (lookId){

            updateLook({
                id: looks.id,
                look_name: looks.look_name,
            })
          .then(() => history.push("/looks"))
        // } else {
            
        //     createLook({
        //         look_name: looks.look_name,
        //     })
        //     .then(() => history.push("/looks"))
            }
        }
    }

    useEffect(() => {
        if (lookId) {
          getLookById(lookId)
          .then(looks => {
              setLooks(looks)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
      }
  }, [])

  return (
    <form className="lookForm">
            <h2 className="lookForm__title">Create a New Look</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="lookId">Look Name: </label>
                    <select name="lookId" className="form-control"
                        value={ looks.lookId }
                        onChange={ handleControlledInputChange }>
                        <option value="0">Select a Look...</option>
                        {
                            looks.map(look => (
                                <option key={look.id} value={look.id}>{looks.look_name}</option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="note">Note: </label>
                    <input name="note" type="text" onChange={handleSaveLook} defaultValue={looks.note}/>
                </div>
            </fieldset>

        <button className="btn btn-primary"
            disabled={isLoading}
            onClick={event => {
                event.preventDefault()
                handleSaveLook()
            }}>
            {lookId ? "Save Look" : "Add New Look"}</button>
        {lookId ? <button className="btn btn-cancel"
            onClick={() => { history.push("/looks") }}>Cancel
            </button> : ""}
    </form>
)
}
