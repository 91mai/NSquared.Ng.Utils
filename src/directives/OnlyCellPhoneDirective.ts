module NSquared.Ng.Utils {
    var CELLPHONE_ONLY_REGEXP = /^09\d{8}$/;

    angular.module('NSquared.Ng.Utils')
        .directive('nsOnlyCellphone', (): ng.IDirective => {
            return {
                require: 'ngModel',
                link: (scope, elm, attrs, ctrl) => {
                    ctrl.$parsers.unshift(function (viewValue) {
                        if (CELLPHONE_ONLY_REGEXP.test(viewValue)) {
                            // it is valid
                            ctrl.$setValidity('onlyCellphone', true);
                            return viewValue;
                        } else {
                            // it is invalid, return undefined (no model update)
                            ctrl.$setValidity('onlyCellphone', false);
                            return undefined;
                        }
                    });
                }
            };
        });
} 