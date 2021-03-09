// export default function (){}
import * as CounterActions from '../store/actions/counter-actions';

class CounterController {

    constructor($scope, $ngRedux){
        "ngInject"
        $ngRedux.connect(this.mapStateToThis, CounterActions)(this);
        // console.log("Constructor Called");
    }

    mapStateToThis(state){
        return {
            ctr : state.counter
        }
    }
    $onInit(){
        // console.log("OnINIT called");
    }

}

export default CounterController