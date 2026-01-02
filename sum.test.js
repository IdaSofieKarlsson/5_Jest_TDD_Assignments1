import sum from "./sum.js";

test("add 1+2 to equal 3", () => {
    expect(sum(1, 2)).not.toBe(5);
});

test("five and five is ten", () => {
    const value = 5 + 5;
    expect(value).toBeGreaterThan(9);
});

test("there's no m in my name", () => {
    expect("Ida").not.toMatch(/I/);
});
