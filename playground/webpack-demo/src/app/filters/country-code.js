export function CountryCode(){
    return function(input, countryName){
        // console.log("Filter - ", input);
        switch (countryName) {
            case 'USA':
                return "+1 " + input;
            case 'AUS':
                return "+12 " + input;
            case 'EUR':
                return "+32 " + input;
            default:
                return "+91 " + input;
        }
    }
} 