module NSquared.Ng.Utils {
    export class NumberFitLengthFilter {
        public static Factory($log: ng.ILogService) {
            return (input, length): string=> {
                var num = parseInt(input, 10);
                length = parseInt(length, 10);

                if (isNaN(num) || isNaN(length)) {
                    return input;
                }

                var numString = '' + num;
                while (numString.length < length) {
                    numString = '0' + numString;
                }
                return numString;
            }
        }
    }

    angular.module('NSquared.Ng.Utils')
        .filter('nsNumberFitLength', ['$log', NumberFitLengthFilter.Factory])
}