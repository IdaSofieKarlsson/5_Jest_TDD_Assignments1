import fetchData from "./fetchData";

test("Data is resolved", () => {
    return fetchData().then((data) => {
        expect(data).toBe("Resolved successfully!");
    });
});
