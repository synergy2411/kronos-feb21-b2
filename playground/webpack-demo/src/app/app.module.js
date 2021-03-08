import { MainController } from "./controllers/app-controllers";
import { CountryCode } from './filters/country-code';
import { CommentFormController } from "./controllers/CommentFormController";
import DataFactory from "./services/data-factory";
import MyService from './services/my-service';
import ConfigurableProvider from './services/configurable-provider';
// import { ConfigurableProvider } from './services/configurable-provider';

angular.module("app", ["emp-app"])
    .config(["ConfigurableProvider", "CompanyAddress", function (ConfigurableProvider,CompanyAddress) {
        console.log("Config-----")
        ConfigurableProvider.setMessage("The Config Message");
        console.log("Constant - ", CompanyAddress)
    }])
    .controller("MainController", [
        "$scope", "$rootScope", "$log", "$timeout",
        "data", "MyService", "Configurable", "CompanyName", "CompanyAddress",
        MainController])
    .controller("CommentFormController", ["$scope", CommentFormController])
    .filter("countrycode", CountryCode)
    .factory("data", ["$http", "$q", DataFactory])
    .service("MyService", [MyService])
    .provider("Configurable", ConfigurableProvider)
    .value("CompanyName", "Kronos")
    .constant("CompanyAddress", "201, Main Road, Noida")

