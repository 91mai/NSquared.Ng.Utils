module NSquared.Ng.Utils {
    var CHINESE_ONLY_REGEXP = /^[\u4E00-\u9FA5]{2,}$/;

    angular.module('NSquared.Ng.Utils')
        .directive('nsOnlyChinese', (): ng.IDirective => {
            return {
                require: 'ngModel',
                link: (scope, elm, attrs, ctrl) => {
                    ctrl.$parsers.unshift(function (viewValue) {
                        if (CHINESE_ONLY_REGEXP.test(viewValue)) {
                            // it is valid
                            ctrl.$setValidity('onlyChinese', true);
                            return viewValue;
                        } else {
                            // it is invalid, return undefined (no model update)
                            ctrl.$setValidity('onlyChinese', false);
                            return undefined;
                        }
                    });
                }
            };
        });
} 