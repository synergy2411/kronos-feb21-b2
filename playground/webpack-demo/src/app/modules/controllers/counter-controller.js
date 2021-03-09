// export default function (){}
import * as CounterActions from '../store/actions/counter-actions';

class CounterController {

    constructor($scope, $ngRedux){
        "ngInject"
        $ngRedux.connect(this.mapStateToThis, CounterActions)(this);
        // console.log("Constructor Called");
    }
    onDeleteItem(index){
        this.itemDelete(index);
        // console.log(index);
    }
    onStoreResult(){
        this.onResultStore();
    }
    onAddBtnClick(value){
        this.addCounter(value)
    }
    onDecreaseBtnClick(){
        this.onDecrement();
    }
    onIncreaseBtnClick(){
        this.onIncrement();
    }
    mapStateToThis(state){
        return {
            ctr : state.counter,
            res : state.result
        }
    }
    $onInit(){
        // console.log("OnINIT called");
    }

}

export default CounterController