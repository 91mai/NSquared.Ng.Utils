var NSquared;
(function (NSquared) {
    var Ng;
    (function (Ng) {
        var Utils;
        (function (Utils) {
            var CELLPHONE_ONLY_REGEXP = /^09\d{8}$/;
            angular.module('NSquared.Ng.Utils').directive('nsOnlyCellphone', function () {
                return {
                    require: 'ngModel',
                    link: function (scope, elm, attrs, ctrl) {
                        ctrl.$parsers.unshift(function (viewValue) {
                            if (CELLPHONE_ONLY_REGEXP.test(viewValue)) {
                                // it is valid
                                ctrl.$setValidity('onlyCellphone', true);
                                return viewValue;
                            }
                            else {
                                // it is invalid, return undefined (no model update)
                                ctrl.$setValidity('onlyCellphone', false);
                                return undefined;
                            }
                        });
                    }
                };
            });
        })(Utils = Ng.Utils || (Ng.Utils = {}));
    })(Ng = NSquared.Ng || (NSquared.Ng = {}));
})(NSquared || (NSquared = {}));
//# sourceMappingURL=onlyCellPhoneDirective.js.map