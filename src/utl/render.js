class ShapeRenderComp {
  constructor() {}

  changeColor(shape, format = "rgb") {
    if (!shape || !shape.color) {
      console.error("Invalid shape object.");
      return;
    }

    const randomColorComponent = () => Math.floor(Math.random() * 256);

    if (format === "rgb") {
      shape.color = `rgb(${randomColorComponent()},${randomColorComponent()},${randomColorComponent()})`;
    } else if (format === "hex") {
      const r = randomColorComponent().toString(16).padStart(2, "0");
      const g = randomColorComponent().toString(16).padStart(2, "0");
      const b = randomColorComponent().toString(16).padStart(2, "0");
      shape.color = `#${r}${g}${b}`;
    } else {
      console.error("Unsupported color format.");
    }
  }

  drawHexagon(context, shape) {
    const a = (2 * Math.PI) / 6;
    let tempVerticles = [];

    context.beginPath();
    for (let i = 0; i < 6; i++) {
      const x = shape.x + shape.r * Math.cos(-a * i);
      const y = shape.y + shape.r * Math.sin(-a * i);

      tempVerticles.push({ x, y });
      context.lineTo(x, y);
    }
    context.closePath();
    context.fillStyle = shape.color;
    context.fill();

    shape.verticles = tempVerticles;
  }

  drawCircle(context, shape) {
    context.beginPath();
    context.arc(shape.x, shape.y, shape.w, 0, 2 * Math.PI, false);
    context.fillStyle = shape.color;
    context.fill();
  }

  drawTriangle(context, shape) {
    shape.verticles = [
      { x: shape.left, y: shape.bottom },
      { x: shape.right, y: shape.bottom },
      { x: (shape.left + shape.right) / 2, y: shape.top },
    ];

    context.beginPath();
    context.moveTo(shape.left, shape.bottom);
    context.lineTo(shape.right, shape.bottom);
    context.lineTo((shape.left + shape.right) / 2, shape.top);
    context.closePath();
    context.fillStyle = shape.color;
    context.fill();
  }

  drawRect(context, shape) {
    if (shape.hits >= 3) return;

    switch (shape.type) {
      case "Hexagon":
        this.drawHexagon(context, shape);
        break;
      case "Circle":
        this.drawCircle(context, shape);
        break;
      default:
        this.drawTriangle(context, shape);
        break;
    }
  }
}

export default ShapeRenderComp;
