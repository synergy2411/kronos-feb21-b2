import CounterController from "./controllers/counter-controller";

export default angular.module("counter-app", [])

.component("appCounter", {
    template : "Component Template",
    controller : CounterController
})

// .directive("appCounter", function(){
//     return {
//         restrict : "ACE",
//         template : "Counter Directive Works!"
//     }
// })