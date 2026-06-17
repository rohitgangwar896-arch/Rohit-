const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");
const gameOverElement = document.getElementById("game-over");

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let score = 0;
let dx = 0;
let dy = 0;
let snake = [
    { x: 10, y: 10 },
    { x: 10, y: 11 },
    { x: 10, y: 12 }
];
// Bolt: Use a Set for O(1) lookup of snake body parts (spatial occupancy check)
let snakeSet = new Set(snake.map(p => `${p.x},${p.y}`));
let food = { x: 5, y: 5 };
let gameRunning = true;

document.addEventListener("keydown", changeDirection);

function main() {
    if (!gameRunning) return;

    setTimeout(function onTick() {
        clearCanvas();
        drawFood();
        advanceSnake();
        drawSnake();
        main();
    }, 100);
}

function clearCanvas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    snake.forEach((part, index) => {
        ctx.fillStyle = index === 0 ? "#2ecc71" : "#27ae60";
        ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize - 2, gridSize - 2);
    });
}

function advanceSnake() {
    if (dx === 0 && dy === 0) return;

    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    // Bolt: Handle movement first to correctly check for collisions.
    // In many snake implementations, the head can move into the tail's current position.

    if (head.x === food.x && head.y === food.y) {
        // Growth: Check collision first, then add.
        if (collision(head)) {
            gameOver();
            return;
        }
        snake.unshift(head);
        snakeSet.add(`${head.x},${head.y}`);
        score += 10;
        scoreElement.textContent = `Score: ${score}`;
        createFood();
    } else {
        // Normal movement: Remove tail, THEN check collision and add head.
        // This allows the head to move into the space the tail just vacated.
        const tail = snake.pop();
        snakeSet.delete(`${tail.x},${tail.y}`);

        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount || collision(head)) {
            // Re-add tail if game over to keep snake intact for display
            snake.push(tail);
            snakeSet.add(`${tail.x},${tail.y}`);
            gameOver();
            return;
        }

        snake.unshift(head);
        snakeSet.add(`${head.x},${head.y}`);
    }
}

function collision(head) {
    // Bolt: O(1) lookup using Set instead of O(n) array scan
    return snakeSet.has(`${head.x},${head.y}`);
}

function createFood() {
    food.x = Math.floor(Math.random() * tileCount);
    food.y = Math.floor(Math.random() * tileCount);

    // Bolt: O(1) lookup using Set
    if (snakeSet.has(`${food.x},${food.y}`)) {
        createFood();
    }
}

function drawFood() {
    ctx.fillStyle = "#e74c3c";
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);
}

function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;
    const goingUp = dy === -1;
    const goingDown = dy === 1;
    const goingRight = dx === 1;
    const goingLeft = dx === -1;

    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -1;
        dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -1;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 1;
        dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 1;
    }
}

function gameOver() {
    gameRunning = false;
    gameOverElement.style.display = "block";
}

function resetGame() {
    score = 0;
    dx = 0;
    dy = 0;
    snake = [
        { x: 10, y: 10 },
        { x: 10, y: 11 },
        { x: 10, y: 12 }
    ];
    // Bolt: Reset the tracking Set
    snakeSet = new Set(snake.map(p => `${p.x},${p.y}`));
    gameRunning = true;
    scoreElement.textContent = `Score: ${score}`;
    gameOverElement.style.display = "none";
    createFood();
    main();
}

createFood();
main();
