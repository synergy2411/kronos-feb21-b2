// export default function (){}
class CounterController {

    constructor($scope){
        "ngInject"
        console.log("Constructor Called");
    }

    $onInit(){
        console.log("OnINIT called");
    }

}

export default CounterController