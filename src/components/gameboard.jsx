import { useState, useEffect } from "react";
import Scores from "./scoreboard";
import GetImages from "./Api";
import Card from "./card";
import { cardsInfo } from "./items";

const data = []

cardsInfo.forEach(info => {
    data.push(<Card key={info.id} image={info.url}/>)
})


let newBestScore = 0;
let prevBestScore = 0;
let BestScores = [];

export default function GameBoard(){
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(data)
    },[])

    const handleCardShuffle = (e) => {
        const clickedItem = e.target.closest('div');
        const children = document.getElementById('cardContainer').querySelectorAll('div');
        if(clickedItem.classList.contains('clicked')){
            BestScores.push(newBestScore);
            newBestScore = 0;
            prevBestScore = Math.max(...BestScores);
            setScore(0);
            setBestScore(prevBestScore);
            children.forEach(child => {
                if(child.classList.contains('clicked')){
                    child.classList.remove('clicked');
                }
            })
        }
        else{
            clickedItem.classList.add('clicked');
            const newItems = [];
            const indexes = [];
            setScore(score + 1);
            newBestScore++;
            setBestScore(newBestScore > prevBestScore ? newBestScore : prevBestScore);
            
            // if(newBestScore > prevBestScore){
            //     newBestScore++;
            //     setBestScore(newBestScore);
            // }
            while(indexes.length < 15){
                let index = Math.floor(Math.random() * 15);
                if(indexes.includes(index)){
                    continue;
                }
                indexes.push(index);
            }
            for (let i = 0; i <indexes.length; i++) {
                newItems.push(items[indexes[i]])
            }  
            setItems(newItems);
        }
    }

    return (
        <div id="mainContainer">
            <Scores score={score} bestScore={bestScore}/>
            <div id="cardContainer" onClick={(e) => handleCardShuffle(e)}>
                {
                    items.map(card => card)
                }
            </div>
        </div>
    )
}