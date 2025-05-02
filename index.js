function getGameState(id) {
    let moves = []
    const player1 = "X"
    const player2 = "O"

    let victoryPatterns = createVictoryPatterns()

    function row(i, adder) {
        let result = []
        for (let x = i; result.length < 3; x += adder) {
            result.push(x)
        }
        
        // make sure its not greater than 9
        if (result[result.length - 1] > 9) return null

        const endpins = [3, 6, 9, 8, 7]
        let straightLine = false
        endpins.forEach((pin) => {
            if (result[result.length - 1] == pin) straightLine = true
        })

        if (straightLine != true) return null
        else return result
    }

    function checkPlayerVictory(playerMoves) {
        for (let pattern of victoryPatterns) {
            let allMovesPresent = pattern.every(move => playerMoves.includes(move));
            if (allMovesPresent) {
                return true;
            }
        }
        return false;
    }

    
    function createVictoryPatterns() {
        let patterns = []
    
        for (let i = 1; i <= 7; i++) {
            if (i == 5 || i == 6) continue;
        
            patterns.push(row(i, 1)) // checks for horizontal victory pattern
            patterns.push(row(i, 3)) // checks for vertical victory pattern
            patterns.push(row(i, 4)) // checks for diagnal victory pattern
            patterns.push(row(i, -2)) // checks for backwards diagnal victory pattern

        }
        return patterns.filter((v) => v != null)
    }

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


