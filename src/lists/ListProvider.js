import React, { useState } from "react"

export const ShoppingListContext = React.createContext()

export const ShoppingListProvider = (props) => {
    const [ lists, setLists ] = useState([])



    const getLists = () => {
        return fetch("http://localhost:8000/lists", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("ac_user_id")}`
            }
        })
            .then(response => response.json())
            .then(setLists)
    }



    const createList = (list) => {
        return fetch('http://localhost:8000/lists', {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem('ac_user_id')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(list)
        })
        .then(getLists)
    }
    
    const deleteList = listId => {
        return fetch(`http://localhost:8000/looks/${listId}`,{
            method: "DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("ac_user_id")}`
            }
        })
            .then(getLists)
    }
    
       const updateList = list => {
        return fetch(`http://localhost:8000/lists/${list.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem('ac_user_id')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(list)
        })
            .then(getLists)
    }


        const getListById = (id) => {
        return fetch(`http://localhost:8000/lists/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem('ac_user_id')}`
            }
        })
            .then(res => res.json())

        }
    
    return (
        <ShoppingListContext.Provider value={{ lists, getLists, createList, deleteList, updateList, getListById }} >
            { props.children }
        </ShoppingListContext.Provider>
    )
}