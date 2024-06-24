import GetImages from './Api'

export default function Scores({ score, bestScore }){
    const images = GetImages();
    images.then(image => console.log(image))
    return (
        <div id="gameScores">
            <div id="scoresTitle">Memory Card Game</div>
            <div id="scoresDetails">
                <p id="scores">Score: {score}</p>
                <p id="bestScore">Best Score: {bestScore}</p>
            </div>
        </div>
    )
}