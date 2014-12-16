module NSquared.Ng.Utils {
    export class ReverseFilter {
        public static Factory($log: ng.ILogService) {
            return (items: any[]) => {
                return items.slice(0).reverse();
            };
        }
    }

    angular.module('NSquared.Ng.Utils')
        .filter('nsReverse', ['$log', ReverseFilter.Factory]);
} 