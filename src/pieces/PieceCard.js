// *  PieceCard which renders individual item objects as HTML

import React from "react"
import { Link } from "react-router-dom"



export const PieceCard = ({ piece }) => ((
    <section className="piece">
        <h3 className="piece__name">
            <Link to={`/pieces/detail/${piece.id}`}>
            {piece.piece_name}
            </Link>
           </h3> 
        <img scr= {piece.imageurl} alt=""/>
    </section>
) 
)