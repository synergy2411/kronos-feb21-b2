// Test suites
describe("Test Suite : 1", function(){
    let listCtrl;
    beforeEach(module("notesApp"))

    beforeEach(inject(function($controller){
        listCtrl = $controller("ListController");
    }))

    it("Should have items available", function(){
        let items = [
            {label : "Pot the plant", done : true},
            {label : "Renew Car insurance", done : false}
        ]
        expect(listCtrl.items).toEqual(items);
    })

    it("Should have items based on state", function(){
        let item = {label : "Pot the plant", done : true};
        let actualState = listCtrl.getDoneClass(item);
        expect(actualState.finished).toBeTruthy()
        expect(actualState.unfinished).toBeFalsy()
        item.done = false;
        actualState = listCtrl.getDoneClass(item);
        expect(actualState.finished).toBeFalsy()
        expect(actualState.unfinished).toBeTruthy()
    })

    // beforeEach(function(){})
    // afterEach();
    // beforeAll();
    // afterAll();
    
    // it("Should be truthy", function(){
    //     // Assertion
    //     expect(true).toBeTruthy();
    // })
    // it("Should be Falsy", function(){
    //     // Assertion
    //     expect(false).toBeFalsy();
    // })
    // it("Should have items", function(){
    //     let items = [{label : "pot the plant", status : true}]
    //     expect(items).toEqual([{label : "pot the plant", status : true}]);
    // })
    // it("Should conatin Angular", function(){
    //     let str = "Welcome to Angular";
    //     expect(str).toContain("Angular");
    // })
})