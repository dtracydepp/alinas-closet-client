import React, { useContext, useState, useEffect } from "react"
import { LookContext } from "../looks/LookProvider.js"
import { useHistory, useParams } from 'react-router-dom'


export const LookForm = () => {
    const history = useHistory()
    const { getLooks,createLook, deleteLook,getLookById, updateLook  } = useContext(LookContext)
    const { lookId = null } = useParams()

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentLook, setCurrentLook] = useState({
        look_name: "",
        note: "",
    })

    /*
        Get looks on initialization so that the <select>
        element presents look choices to the user.
    */
    useEffect(() => {
        getLooks()
    }, [])

    useEffect(() => {
        if (lookId != null) {
            getLooks(lookId).then(setCurrentLook)
        }
    }, [])




    const changeLookNameState = (event) => {
        const newLookState = { ...currentLook }
        newLookState.look_name = event.target.value
        setCurrentLook(newLookState)
    }

    const changeLookNoteState = (event) => {
        const newLookState = { ...currentLook }
        newLookState.note = event.target.value
        setCurrentLook(newLookState)
    }

    

    return (
        <form className="lookForm">
            <h2 className="lookForm__title">Create a New Look</h2>
            
            <fieldset>
                <div className="form-group">
                <label htmlFor="lookId">Name of Look: </label>
                <input type="text" id="look" onChange={changeLookNameState} required autoFocus className="form-control" placeholder="Look Name" value={currentLook.look_name}/>
                <p>Or</p>
                <select name="lookId" onChange={changeLookNameState} value={currentLook.look_name}>
                        <option value="0">Select a look</option>
                        {
                            currentLook.map(cl =>{
                                return <option key={cl.id} value={cl.id}>{cl.look_name}</option>
                             })
                        }
                    </select>
                    
                   
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="note">: </label>
                    <input type="text" name="note" required autoFocus className="form-control"
                        value={currentLook.note}
                        onChange={changeLookNoteState}
                    />
                </div>
            </fieldset>

           

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const look = {
                        look_name: currentLook.look_name,
                        note: currentLook.note,
                        
                    }

                    if (lookId) {
                        look.id = lookId
                        updateLook(look).then(() => history.push('/looks'))
                    } else {
                        // Send POST request to your API
                        createLook(look)
                            .then(() => history.push("/looks"))
                    }
                }}
                className="btn btn-primary">Create Look</button>
        </form>
    )
}