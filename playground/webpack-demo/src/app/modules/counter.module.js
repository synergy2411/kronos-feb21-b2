import CounterController from "./controllers/counter-controller";
import ngRedux from 'ng-redux';
import { createStore } from "redux";
import CounterReducer from "./store/reducers/counter-reducer";
import thunk from 'redux-thunk';

const store = createStore(CounterReducer);
const logger = store => next => action =>{
    // console.log("Logger State - ", store.getState());
    // console.log("Logger Action - ", action);
    return next(action);
}
// function logger(store){
//     return function(next){
//         return function(action){
//             // Code to write
//         }
//     }
// }

export default angular.module("counter-app", [ngRedux])
    .config(["$ngReduxProvider", function($ngReduxProvider){
        $ngReduxProvider.provideStore(store, [logger, thunk]);
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