import {expect} from "chai";
import {addTwo} from "../src/test";

describe("Testing demo function", () => {
    it("Should echo input", () => {
        let input: number = 5;
        expect(addTwo(input)).to.eq(input + 2);
    });
});