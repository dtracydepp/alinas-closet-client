import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login.js"
import { Register } from "./auth/Register.js"
import { ApplicationViews } from "./ApplicationViews.js"
import { NavBar } from "./nav/NavBar.js"
import './App.css';

export const App = () => (
  <>
      <Route render={() => {
          if (localStorage.getItem("ac_user_id")) {
              return <>
                <img className="logo" src="AlinasClosetHeader.png" alt="AC-Logo"/>
                  <NavBar />
                  <ApplicationViews />
              </>
            
          } else {
              return <Redirect to="/login" />
          }
      }} />

      <Route path="/login" render={() => {
          if (localStorage.getItem("ac_user_id")) {
              return <Redirect to="/" />
          } else {
              return <Login />
          }
      }} />

      <Route path="/register" render={() => {
          if (localStorage.getItem("ac_user_id")) {
              return <Redirect to="/" />
          } else {
              return <Register />
          }
      }} />
  </>
)