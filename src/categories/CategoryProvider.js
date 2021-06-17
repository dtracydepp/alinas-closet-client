import React, { useState } from "react"

export const CategoryContext = React.createContext()

export const CateogoryProvider = (props) => {
    const [ categories, setCategories ] = useState([])

    const getCategories = () => {
        return fetch("http://localhost:8000/categories", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("ac_user_id")}`
            }
        })
            .then(response => response.json())
            .then(setCategories)
    }

    
    const getCategoryById = (id) => {
        return fetch(`http://localhost:8000/categories/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem('ac_user_id')}`
            }
        })
            .then(res => res.json())


      }

    
    
   
    return (
        <CategoryContext.Provider value={{ categories, getCategories, getCategoryById }} >
            { props.children }
        </CategoryContext.Provider>
    )
}