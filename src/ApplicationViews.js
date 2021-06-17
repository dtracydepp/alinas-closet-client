import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { PieceProvider } from "./pieces/PieceProvider.js"
// import { PieceList } from "./pieces/PieceList.js"
import { TopList } from "./pieces/TopList.js"
import { CateogoryProvider } from "./categories/CategoryProvider.js"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the home page when http://localhost:8000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            
             

            {/* Render the shoplist.js when http://localhost:8000/shop */}
            <PieceProvider>
                <CateogoryProvider>

            <Route path="/shop">
               <TopList />
               </Route>    

            <Route path="/tops">
               {/* <TopList /> */}
            </Route>

            <Route path="/bottoms">
               
               </Route>

            <Route path="/sets">
               
               </Route>   

            {/* on Shop" "name of functions return buttons that pushes to "/shop" */}
            {/* <Route exact path="/shop" render={props => <"Name of Function" {...props} />}>
                </Route> */}
                </CateogoryProvider>
           </PieceProvider>
        
        </>
    )
}