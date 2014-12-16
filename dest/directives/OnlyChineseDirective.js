var NSquared;
(function (NSquared) {
    (function (Ng) {
        (function (Utils) {
            var CHINESE_ONLY_REGEXP = /^[\u4E00-\u9FA5]{2,}$/;

            angular.module('NSquared.Ng.Utils').directive('nsOnlyChinese', function () {
                return {
                    require: 'ngModel',
                    link: function (scope, elm, attrs, ctrl) {
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
        })(Ng.Utils || (Ng.Utils = {}));
        var Utils = Ng.Utils;
    })(NSquared.Ng || (NSquared.Ng = {}));
    var Ng = NSquared.Ng;
})(NSquared || (NSquared = {}));
