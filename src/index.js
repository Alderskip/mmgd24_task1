import Circle from "./circle";
import Hexagon from "./hexagon";
import QuadTree from "./quad-tree";
import Rectangle from "./rectangle";
import Triangle from "./triangle";
import CollisionComponent from "./utl/collision";
import ShapeRenderComp from "./utl/render";

const counter = document.getElementById("counter");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const canvas = document.getElementById("cnvs");

const quad = new QuadTree(
  new Rectangle(0, 0, document.body.clientWidth, document.body.clientHeight)
);
const renderComponent = new ShapeRenderComp();
const collisionComponent = new CollisionComponent();

const gameState = {
  rects: [],
};

const size = 16;
const circleSize = size * 4; // size + gap
const cols = Math.floor(window.document.body.clientWidth / circleSize) - 1;
const rows = Math.floor(window.document.body.clientHeight / circleSize) - 1;

const getRandomPosition = (index) => {
  return {
    x: circleSize + (index % cols) * circleSize,
    y: circleSize + Math.floor(index / cols) * circleSize,
  };
};

const getRandomVelocity = () => ({
  x: (Math.random() - 0.5) * 2,
  y: (Math.random() - 0.5) * 2,
});

const createShape = (index) => {
  const { x, y } = getRandomPosition(index);
  const velocity = getRandomVelocity();

  switch (getRandomInt(0, 2)) {
    case 0:
      return new Hexagon(size, x, y, velocity.x, velocity.y);
    case 1:
      return new Circle(x, y, size, velocity.x, velocity.y);
    case 2:
      return new Triangle(
        size * (1 + Math.cos(Math.PI / 6)),
        x,
        y,
        velocity.x,
        velocity.y
      );
  }
};

for (let i = 0; i < rows * cols; i++) {
  gameState.rects.push(createShape(i));
}

function queueUpdates(numTicks) {
  for (let i = 0; i < numTicks; i++) {
    gameState.lastTick += gameState.tickLength;
    update(gameState.lastTick);
  }
}

function draw(tFrame) {
  counter.innerHTML = `Объекты: ${gameState.rects.length}`;
  const context = canvas.getContext("2d");

  // Clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw shapes
  gameState.rects.forEach((rect) => renderComponent.drawRect(context, rect));
}

function update(tick) {
  quad.clear();

  // Insert rectangles into quadtree
  gameState.rects.forEach((rect) => quad.insert(rect));

  const activeRects = [];

  gameState.rects.forEach((currentRect) => {
    const possibleOverlaps = quad.queryRange(currentRect);
    let isOverlap = false;

    if (currentRect.hits < 3) {
      activeRects.push(currentRect);

      possibleOverlaps.forEach((otherRect) => {
        if (
          otherRect !== currentRect &&
          otherRect.hits < 3 &&
          collisionComponent.intersects(currentRect, otherRect)
        ) {
          isOverlap = true;
        }
      });
    }

    if (isOverlap) {
      handleCollision(currentRect);
    } else if (isOutOfBounds(currentRect)) {
      handleBoundaryCollision(currentRect);
    }
  });

  // Update positions of rectangles
  gameState.rects.forEach((rect) => {
    rect.x += rect.vx;
    rect.y += rect.vy;
  });

  gameState.rects = activeRects;
}

function handleCollision(rect) {
  rect.vx = -rect.vx;
  rect.vy = -rect.vy;
  renderComponent.changeColor(rect);
  rect.hits += 1;
}

function handleBoundaryCollision(rect) {
  rect.vx = -rect.vx;
  rect.vy = -rect.vy;
}

function isOutOfBounds(rect) {
  return (
    rect.left < 0 ||
    rect.top < 0 ||
    rect.right > document.body.clientWidth ||
    rect.bottom > document.body.clientHeight
  );
}

function run(tFrame) {
  gameState.stopCycle = window.requestAnimationFrame(run);

  const nextTick = gameState.lastTick + gameState.tickLength;
  let numTicks = 0;

  if (tFrame > nextTick) {
    const timeSinceTick = tFrame - gameState.lastTick;
    numTicks = Math.floor(timeSinceTick / gameState.tickLength);
  }
  queueUpdates(numTicks);
  draw(tFrame);
  gameState.lastRender = tFrame;
}

function stopGame(handle) {
  window.cancelAnimationFrame(handle);
}

function setup() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gameState.lastTick = performance.now();
  gameState.lastRender = gameState.lastTick;
  gameState.tickLength = 15; //ms
}

setup();
run();
