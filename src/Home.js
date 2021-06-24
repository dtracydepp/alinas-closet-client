import React from "react";
import { PropsAndState } from './PropsAndState'
import Alina from "./images/Alina.JPG"
import "./App.css"


export const Home = () => (
    <>
        <PropsAndState yourName={"Snoh"} />
       <div className="home__pic"><img src={Alina} alt="Alina" /></div>
       <div className="home__tag"><p>Our little ones need lots of time, shop smarter..</p></div>
       
    </>
)