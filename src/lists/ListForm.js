import React, { useState, useContext, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { ShoppingListContext } from "../lists/ListProvider.js"


export const ShoppingListForm = () => {

    const { createList, getListById, updateList } = useContext(ShoppingListContext)

    const [lists, setLists] = useState({
        list_name: "",
    });

    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    const { listId } = useParams();

    const handleControlledInputChange = (event) => {
        const newList = { ...lists }
        
        newList[event.target.id] = event.target.value
       
        setLists(newList)
      }

    const handleSaveList = () => {

        if (lists.list_name === "") {
            window.alert("Please name your list!")
          } else {
            setIsLoading(true);
  
        if (listId){

            updateList({
                id: lists.id,
                list_name: lists.list_name,
            })
          .then(() => history.push("/lists"))
        } else {
            
            createList({
                list_name: lists.list_name,
            })
            .then(() => history.push("/lists"))
            }
        }
    }

    useEffect(() => {
        if (listId) {
          getListById(listId)
          .then(lists => {
              setLists(lists)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
      }
  }, [])

  return (
    <form className="listForm">
            <h2 className="listForm__title">Create a New List</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="listId">List Name: </label>
                    <select name="listId" className="form-control"
                        value={ lists.listId }
                        onChange={ handleControlledInputChange }>
                        <option value="0">Select a List...</option>
                        {
                            lists.map(list => (
                                <option key={list.id} value={list.id}>{list.list_name}</option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="note">Note: </label>
                    <input name="note" type="text" onChange={handleSaveList} defaultValue={lists.note}/>
                </div>
            </fieldset>

        <button className="btn btn-primary"
            disabled={isLoading}
            onClick={event => {
                event.preventDefault()
                handleSaveList()
            }}>
            {listId ? "Save List" : "Add New List"}</button>
        {listId ? <button className="btn btn-cancel"
            onClick={() => { history.push("/lists") }}>Cancel
            </button> : ""}
    </form>
)
}
