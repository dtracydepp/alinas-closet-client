import React, { useState } from "react"

export const LookContext = React.createContext()

export const LookProvider = (props) => {
    const [ looks, setLooks ] = useState([])



    const getLooks = () => {
        return fetch("http://localhost:8000/looks", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("ac_user_id")}`
            }
        })
            .then(response => response.json())
            .then(setLooks)
    }

    const createLook = (look) => {
        return fetch('http://localhost:8000/looks', {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem('ac_user_id')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(look)
        })
        .then(getLooks)
    }
    
    const deleteLook = lookId => {
        return fetch(`http://localhost:8000/looks/${lookId}`,{
            method: "DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("ac_user_id")}`
            }
        })
            .then(getLooks)
    }
    
    const updateLook = look => {
        return fetch(`http://localhost:8000/looks/${look.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem('ac_user_id')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(look)
        })
            .then(getLooks)
    }


        const getLookById = (id) => {
        return fetch(`http://localhost:8000/looks/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem('ac_user_id')}`
            }
        })
            .then(res => res.json())

        }
    
    return (
        <LookContext.Provider value={{ looks, getLooks, createLook,deleteLook, updateLook, getLookById }} >
            { props.children }
        </LookContext.Provider>
    )
}