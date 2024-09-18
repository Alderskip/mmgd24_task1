import Pentagon from "./pentagon";

describe("Pentagon getters", () => {
  it("should calculate borders correctly", () => {
    const pentagon = new Pentagon(10, 20, 20, 0, 0);

    const expectedLeft = Math.min(...pentagon.vertices.map((v) => v.x));
    const expectedRight = Math.max(...pentagon.vertices.map((v) => v.x));
    const expectedTop = Math.min(...pentagon.vertices.map((v) => v.y));
    const expectedBottom = Math.max(...pentagon.vertices.map((v) => v.y));

    expect(pentagon.bottom).toBeCloseTo(expectedBottom, 5);
    expect(pentagon.left).toBeCloseTo(expectedLeft, 5);
    expect(pentagon.top).toBeCloseTo(expectedTop, 5);
    expect(pentagon.right).toBeCloseTo(expectedRight, 5);
  });
});
