import { useState } from "react";
import Scores from "./scoreboard";


export default function GameBoard(){
    return (
        <div id="mainContainer">
            <Scores />
        </div>
    )
}