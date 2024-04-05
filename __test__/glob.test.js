import {glob}from "glob"

describe("Files Test Suite", function(){

    test("should have 3 test files", function(){
        const allFilles = glob.sync("__test__/*.test.js")
        console.log(allFilles)
        expect(allFilles.length).toEqual(4)
    })
})