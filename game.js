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
let food = { x: 5, y: 5 };
let gameRunning = true;

document.addEventListener("keydown", changeDirection);

let lastTickTime = 0;
const tickInterval = 100; // 10 FPS

/**
 * ⚡ Bolt: Refactored game loop to use requestAnimationFrame.
 * This is more efficient as it syncs with the display's refresh rate,
 * reduces CPU usage, and automatically pauses when the tab is inactive.
 */
function main(timestamp) {
    if (!gameRunning) return;

    requestAnimationFrame(main);

    const deltaTime = timestamp - lastTickTime;

    if (deltaTime >= tickInterval) {
        lastTickTime = timestamp - (deltaTime % tickInterval);

        clearCanvas();
        drawFood();
        advanceSnake();
        drawSnake();
    }
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
        score += 10;
        // ⚡ Bolt: Using textContent is faster and safer than innerHTML for text-only updates.
        scoreElement.textContent = `Score: ${score}`;
        createFood();
    } else {
        snake.pop();
    }
}

function collision(head) {
    return snake.some(part => part.x === head.x && part.y === head.y);
}

function createFood() {
    food.x = Math.floor(Math.random() * tileCount);
    food.y = Math.floor(Math.random() * tileCount);

    if (snake.some(part => part.x === food.x && part.y === food.y)) {
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
    gameRunning = true;
    // ⚡ Bolt: Using textContent is faster and safer than innerHTML for text-only updates.
    scoreElement.textContent = `Score: ${score}`;
    gameOverElement.style.display = "none";
    createFood();
    main();
}

createFood();
main();
