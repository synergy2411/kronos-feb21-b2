import { MainController } from "./controllers/app-controllers";
import { CountryCode } from './filters/country-code';
import { CommentFormController } from "./controllers/CommentFormController";
import DataFactory from "./services/data-factory";
import MyService from './services/my-service';
import ConfigurableProvider from './services/configurable-provider';
// import { ConfigurableProvider } from './services/configurable-provider';
import DemoDirective from './directives/demo';
import CommentFormDirective from './directives/comment-form-directive';
import CommentItemDirective from './directives/comment-item-directive';


angular.module("app", ["emp-app"])
    .config(["ConfigurableProvider", "CompanyAddress", 
        function (ConfigurableProvider, CompanyAddress) {
            // console.log("Config-----")
        ConfigurableProvider.setMessage("The Config Message");
        // console.log("Constant - ", CompanyAddress)
    }])
    .controller("MainController", [
        "$scope", "$rootScope", "$log", "$timeout",
        "data", "MyService", "Configurable", "CompanyName", "CompanyAddress",
        MainController])
    .controller("CommentFormController", ["$scope", CommentFormController])
    .filter("countrycode", CountryCode)
    .factory("data", ["$http", "$q", "CompanyName", DataFactory])
    .service("MyService", [MyService])
    .provider("Configurable", ConfigurableProvider)
    .value("CompanyName", "Kronos")
    .constant("CompanyAddress", "201, Main Road, Noida")
    .directive("appDemo", DemoDirective)
    .directive("appCommentForm", CommentFormDirective)
    .directive("appCommentItem", CommentItemDirective)
    .directive("appHeader", function(){
        return {
            restrict : "ACE",
            templateUrl : "./app/views/header.html"
        }
    })
