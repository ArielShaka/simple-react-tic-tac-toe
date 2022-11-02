import React from 'react'

const GameOver = ({clearHistory, winner, restartGame, player, draw}) => {
  return (
    <div className='end-game-screen'>
        {!draw && <span className='win-text'>{player ? "O WON" : "X WON"}</span>}
        {draw && <span className='draw-text'>DRAW GAME</span>}

        <span className='win-history'>
            X's wins: {winner.X}
            <br />
            O's wins: {winner.O}
        </span>

        <button className='btn' onClick={restartGame}>RESTART GAME</button>
        <button className='btn' onClick= {clearHistory}>CLEAR HISTORY</button>
    </div>
  )
}

export default GameOver