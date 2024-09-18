function DotProduct(vec1, vec2) {
  return vec1.x * vec2.x + vec1.y * vec2.y;
}

const PolAndPol = (polygonA, polygonB) => {
  const vA = [...polygonA.verticles, polygonA.verticles[0]];
  const vB = [...polygonB.verticles, polygonB.verticles[0]];

  const getNormal = (v1, v2) => ({
    x: v1.y - v2.y,
    y: -(v1.x - v2.x),
  });

  const getMinSeparation = (normal, vertices, referenceVertices) => {
    return Math.min(
      ...vertices.map((vertex) =>
        DotProduct(normal, {
          x: vertex.x - referenceVertices[0].x,
          y: vertex.y - referenceVertices[0].y,
        })
      )
    );
  };

  let separation = Number.NEGATIVE_INFINITY;

  // Check separation along polygonA edges
  for (let i = 0; i < vA.length - 1; i++) {
    const normal = getNormal(vA[i], vA[i + 1]);
    const minSep = getMinSeparation(normal, vB, vA.slice(i, i + 2));
    separation = Math.max(separation, minSep);
  }

  // Check separation along polygonB edges
  for (let i = 0; i < vB.length - 1; i++) {
    const normal = getNormal(vB[i], vB[i + 1]);
    const minSep = getMinSeparation(normal, vA, vB.slice(i, i + 2));
    separation = Math.max(separation, minSep);
  }

  return separation <= 0;
};

const PolAndCircle = (polygon, circle) => {
  const vertices = [...polygon.verticles, polygon.verticles[0]];
  let separation = Number.NEGATIVE_INFINITY;

  const getNormal = (v1, v2) => ({
    x: v1.y - v2.y,
    y: -(v1.x - v2.x),
  });

  const getRotationMatrix = (normal) => {
    const magnitude = Math.sqrt(normal.x ** 2 + normal.y ** 2);
    const cosA = DotProduct({ x: 1, y: 0 }, normal) / magnitude;
    const sinA = Math.sqrt(1 - cosA ** 2);
    return { cosA, sinA };
  };

  const projectVertex = (vertex, circle, rotation) => {
    const { cosA, sinA } = rotation;
    const dx = vertex.x - circle.x;
    const dy = vertex.y - circle.y;
    return {
      x: dx * cosA + dy * sinA,
      y: -dx * sinA + dy * cosA,
    };
  };

  const computeMinSeparation = (normal, rotation) => {
    let minSep = Number.MAX_VALUE;
    for (const vertex of vertices.slice(0, -1)) {
      const { x, y } = projectVertex(vertex, circle, rotation);
      const dist = x ** 2 - circle.r ** 2;
      minSep = Math.min(minSep, dist);
    }
    return minSep;
  };

  for (let i = 0; i < vertices.length - 1; i++) {
    const normal = getNormal(vertices[i], vertices[i + 1]);
    const rotation = getRotationMatrix(normal);
    const minSep = computeMinSeparation(normal, rotation);
    separation = Math.max(separation, minSep);
  }

  return separation <= 0;
};

const CircleAndCircle = (circleA, circleB) => {
  const dx = circleB.x - circleA.x;
  const dy = circleB.y - circleA.y;
  const distanceSquared = dx ** 2 + dy ** 2;
  const radiusSum = circleA.r + circleB.r;
  const radiusSumSquared = radiusSum ** 2;

  return distanceSquared <= radiusSumSquared;
};

export { CircleAndCircle, PolAndPol, PolAndCircle };
