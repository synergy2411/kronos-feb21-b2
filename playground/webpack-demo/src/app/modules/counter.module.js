import CounterController from "./controllers/counter-controller";
import ngRedux from 'ng-redux';
import { createStore } from "redux";
import CounterReducer from "./store/reducers/counter-reducer";

const store = createStore(CounterReducer);

export default angular.module("counter-app", [ngRedux])
    .config(["$ngReduxProvider", function($ngReduxProvider){
        $ngReduxProvider.provideStore(store);
    }])


    .component("appCounter", {
        // template: "Component Template",
        templateUrl : "./app/modules/views/counter.html",
        controller: CounterController
    })

// .directive("appCounter", function(){
//     return {
//         restrict : "ACE",
//         template : "Counter Directive Works!"
//     }
// })

// npm install redux ng-redux --save