import { PolAndPol, PolAndCircle, CircleAndCircle } from "./intersects";

class CollisionComponent {
  constructor() {}

  intersects(rectA, rectB) {
    if (rectA.type === "Circle" && rectB.type === "Circle")
      return CircleAndCircle(rectA, rectB);
    if (rectA.type === "Circle") return PolAndCircle(rectB, rectA);
    if (rectB.type === "Circle") return PolAndCircle(rectA, rectB);
    return PolAndPol(rectA, rectB);
  }
}

export default CollisionComponent;
