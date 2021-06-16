// *  PieceCard which renders individual item objects as HTML

import React from "react"
import "./Piece.css"


export const PieceCard = ({ piece }) => ((
    <section className="piece">
        <h3 className="piece__name">{piece.piece_name}</h3>
    </section>
) 
)