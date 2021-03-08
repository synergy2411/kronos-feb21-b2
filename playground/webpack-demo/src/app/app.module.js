import { MainController } from "./controllers/app-controllers";
import { CountryCode } from './filters/country-code';

angular.module("app", ["emp-app"])
    .controller("MainController", ["$scope", "$rootScope", MainController])    
    .filter("countrycode", CountryCode)


