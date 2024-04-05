/**
 * @jest-environment jsdom
*/


import $ from "jquery"

describe("Initial Dom Test Suite", function(){

    const mockFunction = jest.fn(() => {
        const p = document.createElement("p")
        p.id ="test"
        p.innerHTML ="Liste de Courses"
        document.body.appendChild(p)
        return "done"
    })
   
    
    test("should mockFunction.mock.calls have length 1", function(){ 
        mockFunction()
        expect(mockFunction.mock.calls).toHaveLength(1);   
    })

    test("should mockFunction.mock.result[0].value to be done", function(){ 
        mockFunction()
        expect(mockFunction.mock.results[0].value).toBe("done");   
    })

    test("should Liste de Courses be somewhere on the page", function(){
        expect($("#test").text()).toBe("Liste de Courses")
    })


    test("should contain ", () => {

        document.body.innerHTML = `
            <header class="header shopping-header">
                <p>Liste de Courses</p>
                <span id="add-button" class="material-symbols-outlined">add</span>
            </header>
            <main class="main shopping-main">
                <ul id="shopping-list"></ul>
                <p id="no-item"></p>
                <section id="new-item-input-container"></section>
                <section id="reset-button-container"></section>
            </main>
        `

        expect($("#add-button").text()).toMatch(/add/)
    })




})