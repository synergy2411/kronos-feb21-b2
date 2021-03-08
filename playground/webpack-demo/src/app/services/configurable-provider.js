export default function (){
    let obj = {}
    obj.msg = "The Provider Message";
    this.setMessage = function(msg){
        obj.msg = msg;
    }
    this.$get = function(){
        return obj
    }
}

// export function ConfigurableProvider(){
//     let obj = {}
//     obj.msg = "The Provider Message";
//     this.setMessage = function(msg){
//         obj.msg = msg;
//     }
//     this.$get = function(){
//         return obj
//     }
// }