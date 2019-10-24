var GetClothing = require("../Let-Var.js");

it("should return undefined as Var out of scope", () => {

    expect(GetClothing.getClothingWithVar(false)).toEqual(undefined);
});

it("should return a value ", () => {

    expect(GetClothing.getClothingWithConst(false)).toEqual(undefined);
});

it("should return a value ", () => {
    expect(GetClothing.getClothingWithLet(false)).toEqual("It’s a shorts kind of day");
});
