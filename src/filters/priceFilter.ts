module NSquared.Ng.Utils {
    export class PriceFilter {
        public static Factory($log: ng.ILogService) {
            return (input): string=> {
                if (!input) {
                    return '$0';
                }

                input = parseFloat(input);

                if (input % 1 === 0) {
                    input = input.toFixed(0);
                }

                return '$' + input;
            }
        }
    }

    export class ZeroToNullFilter {
        public static Factory($log: ng.ILogService) {
            return (input): string=> {
                if (input === 0) {
                    return null;
                }

                return input;
            }
        }
    }

    angular.module('NSquared.Ng.Utils')
        .filter('nsPrice', ['$log', PriceFilter.Factory])
        .filter('nsZeroToNull', ['$log', ZeroToNullFilter.Factory]);
} 