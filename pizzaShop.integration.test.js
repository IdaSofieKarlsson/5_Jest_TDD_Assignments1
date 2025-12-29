import { sendOrder, orderPizza } from "./pizzaShop";

describe("Pizza Shop Integration Test", () => {
    test("should successfully complete a pizza order", () => {
        const result = orderPizza("calzone");
        expect(result).toBe(true);
    });
});
