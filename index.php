<!DOCTYPE html>
<html>

<head>
    <style>
        /* index.css */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            background-color: #1a1a1a;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 20px;
        }

        h1 {
            font-size: 2.5rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 2rem;
            color: #00ff88;
            text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
        }

        h2 {
            font-size: 2rem;
            padding: 20px;
            color: #ff007a;

        }

        table {
            border-collapse: collapse;
            background-color: #2a2a2a;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            overflow: hidden;
        }

        td {
            width: 100px;
            height: 100px;
            text-align: center;
            vertical-align: middle;
            border: 2px solid #3a3a3a;
            transition: background-color 0.3s ease;
        }

        td:hover {
            background-color: #3a3a3a;
        }

        button {
            width: 100%;
            height: 100%;
            background-color: #00ff88;
            border: none;
            color: #1a1a1a;
            font-size: 1.5rem;
            font-weight: bold;
            text-transform: uppercase;
            cursor: pointer;
            transition: transform 0.2s ease, background-color 0.3s ease;
        }

        button:hover {
            background-color: #00cc6e;
            transform: scale(1.05);
        }

        button:active {
            transform: scale(0.95);
        }

        .game-over {
            padding: 50px;
        }

        #game-over>button {
            padding: 10px;
            border-radius: 5px;
        }

        /* Styling for X and O after selection */
        td:not(:has(button)) {
            font-size: 2.5rem;
            font-weight: bold;
            color: #ff007a;
            text-shadow: 0 0 10px rgba(255, 0, 122, 0.5);
            cursor: default;
        }

        /* Responsive design */
        @media (max-width: 400px) {
            td {
                width: 80px;
                height: 80px;
            }

            button {
                font-size: 1.2rem;
            }

            h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>

<body>

    <h1>PHP tic tac toe demo</h1>



    <table>
        <tbody>
            <?php
            function drawboard()
            {

                for ($i = 1; $i <= 9; $i++) {
                    if ($i == 1 || $i == 4 || $i == 7) echo "<tr>";
                    echo "<td id='$i'><button onclick='selectSquare($i)'></button></td>";
                    // if ($i == 1 || $i == 4 || $i == 7) echo "</tr>";
                }
            }

            drawboard();
            ?>
        </tbody>
    </table>

    <div id="game-over"></div>
    <script src="./index.js"></script>
    <script>
        const gameState = getGameState()

        function selectSquare(id) {
            let square = document.getElementById(id)
            let gameOver = document.getElementById("game-over")

            square.innerHTML = gameState.nextMove(id)

            if (gameState.checkVictory()) {
                gameOver.innerHTML = `
                        <h2>game over!</h2>
                        
                        <button onclick="restart()">play again</button>
                `
            }
        }

        function restart() {
            window.location.reload()
        }
    </script>

</body>

</html>