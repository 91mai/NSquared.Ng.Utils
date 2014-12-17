var NSquared;
(function (NSquared) {
    var Ng;
    (function (Ng) {
        var Utils;
        (function (Utils) {
            angular.module('NSquared.Ng.Utils').directive('nsOnlyInvoiceno', function () {
                return {
                    require: 'ngModel',
                    link: function (scope, elm, attrs, ctrl) {
                        ctrl.$parsers.unshift(function (viewValue) {
                            //// 不得為00000000
                            if (viewValue === '00000000') {
                                ctrl.$setValidity('onlyInvoiceno', false);
                                return undefined;
                            }
                            //// 檢查是否為數字
                            var numberPattern = /^\d{8}$/;
                            if (!numberPattern.test(viewValue)) {
                                ctrl.$setValidity('onlyInvoiceno', false);
                                return undefined;
                            }
                            function _valid(n) {
                                return (n % 10 == 0) ? true : false;
                            }
                            function _cal(n) {
                                var sum = 0;
                                while (n != 0) {
                                    sum += (n % 10);
                                    n = (n - n % 10) / 10; // 取整數
                                }
                                return sum;
                            }
                            var tmp = new String("12121241");
                            var sum = 0;
                            for (var i = 0; i < 8; i++) {
                                var s1 = parseInt(viewValue.substr(i, 1));
                                var s2 = parseInt(tmp.substr(i, 1));
                                sum += _cal(s1 * s2);
                            }
                            var isValid = false;
                            if (!_valid(sum)) {
                                if (viewValue.substr(6, 1) == "7") {
                                    isValid = _valid(sum + 1);
                                    ctrl.$setValidity('onlyInvoiceno', isValid);
                                    return isValid ? viewValue : undefined;
                                }
                                ;
                            }
                            isValid = _valid(sum);
                            ctrl.$setValidity('onlyInvoiceno', isValid);
                            return isValid ? viewValue : undefined;
                        });
                    }
                };
            });
        })(Utils = Ng.Utils || (Ng.Utils = {}));
    })(Ng = NSquared.Ng || (NSquared.Ng = {}));
})(NSquared || (NSquared = {}));
//# sourceMappingURL=onlyInvoiceNoDirective.js.map