import { PRODUCTS } from "../model/products";

export default function(){
    let obj = {};
    obj.msg = "The Factory Message";
    obj.getData = function(){
        return PRODUCTS;
    }
    return obj;
}