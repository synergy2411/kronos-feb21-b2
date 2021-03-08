import { MainController } from "./controllers/app-controllers";
import { CountryCode } from './filters/country-code';
import { CommentFormController } from "./controllers/CommentFormController";

angular.module("app", ["emp-app"])
    .controller("MainController", ["$scope", "$rootScope",MainController])    
    .controller("CommentFormController", ["$scope", CommentFormController])
    .filter("countrycode", CountryCode)

