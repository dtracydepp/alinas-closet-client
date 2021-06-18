import React from "react";
import { PropsAndState } from './PropsAndState'
import Alina from "./images/Alina.JPG"


export const Home = () => (
    <>
        <PropsAndState yourName={"Snoh"} />
        <small>Our little ones need lots of time, shop smarter..</small>
        <img src={Alina} alt="Alina" />
       
    </>
)