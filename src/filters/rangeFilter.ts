module NSquared.Ng.Utils {
    export class RangeFilter {
        public static Factory($log: ng.ILogService) {
            return (input, min, max): string=> {                
                min = parseInt(min); //Make string input int
                max = parseInt(max);

                for (var i = min; i <= max; i++) {
                    input.push(i);
                }

                return input;
            }
        }
    }

    angular.module('NSquared.Ng.Utils')
           .filter('nsRange', ['$log', RangeFilter.Factory]);
} 