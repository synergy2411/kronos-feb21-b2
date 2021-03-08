import DemoController from "../controllers/demo-controller";

export default function(){
    // DDO - Directive Definition Object
    return {
        restrict : "ACE",          // E-Element | A=Attribute | C=Class | M=Comment
        // template : `<h2>Demo Directive works!</h2>`
        templateUrl : "./app/views/demo.html",
        controller : DemoController,
        controllerAs : "ctrl"
    }
}