import { add } from "./sum"
describe("Sum Test", () => {
    test("shoud 1 + 3  => 4",() => {
        expect(add(1,3)).toBe(4)
    } )
})