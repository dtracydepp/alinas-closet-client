import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home.js"
import { PieceProvider } from "./pieces/PieceProvider.js"
import { TopList } from "./pieces/TopList.js"
import { BottomList } from "./pieces/BottomList.js"
import { SetList } from "./pieces/SetList.js"
import { Shop } from "./pieces/Shop.js"
import { PieceDetail } from "./pieces/PieceDetail.js"
import { SavedPieceList } from "./pieces/SavedPieces.js"
import { UserPieceProvider } from "./users/UserPieceProvider.js"
import { NoteForm } from "./notes/NoteForm.js"




export const ApplicationViews = () => {
   return (
      <>
         {/* Render the home page when http://localhost:8000/ */}
         <Route exact path="/">
            <Home />
         </Route>


         <PieceProvider>
            <UserPieceProvider>


               <Route path="/shop">
                  <Shop />
               </Route>

               <Route path="/tops">
                  <TopList />
               </Route>

               <Route path="/bottoms">
                  <BottomList />
               </Route>

               <Route path="/sets">
                  <SetList />
               </Route>


               <Route path="/saved">
                  <SavedPieceList />
               </Route>

               <Route exact path="/pieces/detail/:pieceId(\d+)">
                  <PieceDetail />
               </Route>

               <Route path="/userpieces/edit/:userpieceId(\d+)">
                  <NoteForm />
               </Route>

               <Route path="/userpieces/create/:userpieceId(\d+)">
                  <NoteForm />
               </Route>

            </UserPieceProvider>
         </PieceProvider>

      </>
   )
}