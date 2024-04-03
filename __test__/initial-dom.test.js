/**
 * @jest-environment jsdom
*/


import $ from "jquery"

describe("Initial Dom Test Suite", () => {

    test("should be Liste de Courses written somewhre on the page", () => {
        const p = document.createElement("p")
        p.id ="test"
        p.innerHTML ="Liste de Courses"
        document.body.appendChild(p)
        expect($("#test").text()).toBe("Liste de Courses")
    })

})