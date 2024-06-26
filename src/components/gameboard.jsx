import { useState, useEffect } from "react";
import Scores from "./scoreboard";
import GetImages from "./Api";
import Card from "./card";
import { cardsInfo } from "./items";

const data = []

cardsInfo.forEach(info => {
    data.push(<Card key={info.id} image={info.url}/>)
})

export default function GameBoard(){
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(data)
    },[])

    const countClicked = () => {
        const children = document.getElementById('cardContainer').querySelectorAll('div');
        let filteredChildren = 0;
        children.forEach(child => {
            if(child.classList.contains('clicked')){
                filteredChildren++;
            }
        })
        return filteredChildren;
    }

    const handleCardShuffle = (e) => {
        const clickedItem = e.target.closest('div');
        if(clickedItem.classList.contains('clicked')){
            setScore(0);
        }
        if(clickedItem){
            clickedItem.classList.add('clicked');
            const newItems = [];
            const indexes = [];
            setScore(score + 1);
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
        setBestScore(countClicked());
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