const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");
const gameOverElement = document.getElementById("game-over");

const gridSize = 20;
const tileCount = canvas.width / gridSize;
const getHash = (x, y) => x * tileCount + y;

let score = 0;
let dx = 0;
let dy = 0;
let snake = [
    { x: 10, y: 10 },
    { x: 10, y: 11 },
    { x: 10, y: 12 }
];
// Bolt: Use a Set for O(1) collision detection and food placement checks.
// Numeric hash (x * tileCount + y) avoids string serialization overhead.
let snakeSet = new Set(snake.map(p => getHash(p.x, p.y)));

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

    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount || collision(head)) {
        gameOver();
        return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        // Bolt: Add new head hash to snakeSet
        snakeSet.add(getHash(head.x, head.y));
        score += 10;
        // Bolt: Using textContent is more efficient than innerHTML for text-only updates.
        scoreElement.textContent = `Score: ${score}`;
        createFood();
    } else {
        // Bolt: Robust State Synchronization Pattern.
        // Remove tail hash BEFORE adding head hash to prevent clobbering.
        const tail = snake.pop();
        snakeSet.delete(getHash(tail.x, tail.y));
        snakeSet.add(getHash(head.x, head.y));
    }
}

function collision(head) {
    // Bolt: Optimized from O(n) array search to O(1) Set lookup.
    return snakeSet.has(getHash(head.x, head.y));
}

function createFood() {
    food.x = Math.floor(Math.random() * tileCount);
    food.y = Math.floor(Math.random() * tileCount);

    // Bolt: Optimized from O(n) array search to O(1) Set lookup.
    if (snakeSet.has(getHash(food.x, food.y))) {
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
    // Bolt: Correctly re-initialize snakeSet on reset.
    snakeSet = new Set(snake.map(p => getHash(p.x, p.y)));

    gameRunning = true;
    // Bolt: Using textContent is more efficient than innerHTML for text-only updates.
    scoreElement.textContent = `Score: ${score}`;
    gameOverElement.style.display = "none";
    createFood();
    main();
}

createFood();
main();
