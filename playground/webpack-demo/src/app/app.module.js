import { MainController } from "./controllers/app-controllers";
import { CountryCode } from './filters/country-code';
import { CommentFormController } from "./controllers/CommentFormController";
import DataFactory from "./services/data-factory";

angular.module("app", ["emp-app"])
    .controller("MainController", [
        "$scope", "$rootScope", "$log", "$timeout",
        "data",
        MainController])    
    .controller("CommentFormController", ["$scope", CommentFormController])
    .filter("countrycode", CountryCode)
    .factory("data",["$http","$q", DataFactory])

