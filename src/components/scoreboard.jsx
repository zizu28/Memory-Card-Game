import GetImages from './Api'

export default function Scores({ score, bestScore }){
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