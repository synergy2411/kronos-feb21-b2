import { PRODUCTS } from "../model/products";

export default function($http){
    let obj = {};
    
    obj.msg = "The Factory Message";
    obj.getData = function(){
        $http.get("./app/model/products.json")
        .then(function(response){console.log(response)})
        .catch(function(err){console.log(err)})
        return PRODUCTS;
    }
    return obj;
}