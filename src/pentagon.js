import Rectangle from "./rectangle";

export default class Pentagon extends Rectangle {
  constructor(x, y, r, vx, vy) {
    super(x, y, r, r, vx, vy);
    this.type = "Pentagon";
    this.r = r;
    this.hits = 0;
    this.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)})`;

    this.vertices = [];
    const angleStep = (2 * Math.PI) / 5; // 5 sides for pentagon
    for (let i = 0; i < 5; i++) {
      this.vertices.push({
        x: this.x + this.r * Math.cos(angleStep * i),
        y: this.y + this.r * Math.sin(angleStep * i),
      });
    }
  }

  get left() {
    // Leftmost x of all vertices
    return Math.min(...this.vertices.map((v) => v.x));
  }

  get right() {
    // Rightmost x of all vertices
    return Math.max(...this.vertices.map((v) => v.x));
  }

  get top() {
    // Topmost y of all vertices
    return Math.min(...this.vertices.map((v) => v.y));
  }

  get bottom() {
    // Bottommost y of all vertices
    return Math.max(...this.vertices.map((v) => v.y));
  }
}
