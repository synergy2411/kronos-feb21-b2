import { PRODUCTS } from "../model/products";

export default function($http, $q){
    let obj = {};
    let qObj = $q.defer();

    obj.msg = "The Factory Message";
    obj.getData = function(){
        $http.get("./app/model/products.json")
        .then(function(response){
            console.log(response);
            qObj.resolve(response.data)
        })
        .catch(function(err){
            console.log(err);
            qObj.reject(err)
        })
        return qObj.promise;
    }
    return obj;
}

// $http.post(url, data :{})
// $http.delete(url,)
// $http.patch(url, data :{})