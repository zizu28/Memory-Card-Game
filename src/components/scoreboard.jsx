export default function Scores({ score, bestScore }){
    return (
        <div id="gameScores">
            <div id="scoresTitle">Memory Card Game</div>
            <div id="scoresDetails">
                <h2 id="scores">Score: {score}</h2>
                <h2 id="bestScore">Best Score: {bestScore}</h2>
            </div>
        </div>
    )
}