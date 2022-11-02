import React, {useState} from 'react'
import Square from './Square';
import GameOver from './GameOver';

const INITIAL = "";
const PLAYER_X = "X";
const PLAYER_O = "O";
const resultCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 8],

] 



const TicTacToe = () => {
    const [box, setBox] = useState(Array(9).fill(INITIAL));
    const [player, setPlayer] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [draw, setDraw] = useState(false);
    const [winner, setWinner] = useState({X: 0, O: 0});


    const isGameOver = () => {
        //* Check for draw
      if(!gameOver) {
        //* X win check
        for(let i = 0; i < 8; i++) {
            if(
                box[resultCombinations[i][0]] === PLAYER_X &&
                box[resultCombinations[i][1]] === PLAYER_X &&
                box[resultCombinations[i][2]] === PLAYER_X 
            ) {
                setGameOver(true);
                console.log("X wins!");
                setWinner({...winner, X: winner.X + 1});
                return;
            }
        }

         //* O win check
         for(let i = 0; i < 8; i++) {
            if(
                box[resultCombinations[i][0]] === PLAYER_O &&
                box[resultCombinations[i][1]] === PLAYER_O &&
                box[resultCombinations[i][2]] === PLAYER_O 
            ) {
                setGameOver(true);
                console.log("O wins!");
                setWinner({...winner, O: winner.O + 1});
                return;
            }
        }
        if(!box.includes(INITIAL)) {
            setDraw(true);
            setGameOver(true);
            console.log("DRAW");
        }
      }  
    }
    isGameOver();

    const restartGame = () => {
        setBox(Array(9).fill(INITIAL));
        setGameOver(false);
        setDraw(false);
    }

    const clearHistory = () => {
        setWinner({ X: 0, O: 0});
        restartGame();
    }


    const clickHandler = (id) => {
       setBox(
        box.map((box, index) => {
            if(index === id) {
                if(player) {
                    return PLAYER_X;
                }
                return PLAYER_O;
            } 
            return box;
        })
       )
       setPlayer(!player);
    }
  return (
    <div>
       {gameOver && < GameOver winner= {winner} restartGame={restartGame} player={player} draw={draw} clearHistory={clearHistory}/>}
        <Square clickedArray= {box} clickHandler= {clickHandler}/>
    </div>
  )
}

export default TicTacToe