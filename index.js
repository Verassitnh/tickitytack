function getGameState(id) {
    let moves = []
    const player1 = "X"
    const player2 = "O"

    let victoryPatterns = []

    function row(i, adder) {
        let result = []
        for (let x = i; result.length < 3; x += adder) {
            result.push(x)
        }
        
        if (result[result.length - 1] > 9) return null
        else return result
    }

    function checkPlayerVictory(playerMoves) {
        playerVictory = false
        playerMoves.forEach((playerMove) => {
            for (let index = 0; index < victoryPatterns.length; index++) {
                let pattern = victoryPatterns[index];

                const indexOfMatch = pattern.indexOf(Number(playerMove))
                
                if (indexOfMatch != -1) {
                    pattern = pattern.splice(indexOfMatch, 1)
                }

                if (pattern.length == 0) {
                    playerVictory = true 
                    break
                }
            }
        })  

        return playerVictory
    }

    for (let i = 1; i <= 7; i++) {
        if (i == 5 || i == 6) continue;
        
        victoryPatterns.push(row(i, 1)) // checks for horizontal victory pattern
        victoryPatterns.push(row(i, 3)) // checks for vertical victory pattern
        victoryPatterns.push(row(i, 4)) // checks for diagnal victory pattern
    }
    victoryPatterns = victoryPatterns.filter((v) => v != null)

    console.log(victoryPatterns)


    return {
        nextMove: (id) => {
            if (moves.length == 0) moves.push({ mark: player1, id: id })
            else {
                moves.push({ mark: (moves[moves.length - 1].mark == player1 ? player2 : player1), id: id })
            }

            return moves[moves.length -1].mark
        },
        checkVictory: () => {
            
            const player1Moves = moves.filter((v) => {
                if (v.mark == player1) return true
            }).map((v) => v.id)
            const player2Moves = moves.filter((v) => {
                if (v.mark == player2) return true
            }).map((v) => v.id)
            
            console.log("player 1 moves:", player1Moves)
            console.log("player 2 moves:", player2Moves)


            return checkPlayerVictory(player1Moves) || checkPlayerVictory(player2Moves)
        }
        
    }

}


