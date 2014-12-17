var NSquared;
(function (NSquared) {
    var Ng;
    (function (Ng) {
        var Utils;
        (function (Utils) {
            angular.module('NSquared.Ng.Utils').directive('nsOnlyIdentityNo', function () {
                return {
                    require: 'ngModel',
                    link: function (scope, elm, attrs, ctrl) {
                        ctrl.$parsers.unshift(function (viewValue) {
                            var pass = 0; /*為了通過後面的防呆所以...*/
                            var num = new Array(11); /*用來存轉換碼加九個數字 */
                            var sum = 0; /*計算經過公式後的加總*/
                            var table = new Array(10, 11, 12, 13, 14, 15, 16, 17, 34, 18, 19, 20, 21, 22, 35, 23, 24, 25, 26, 27, 28, 29, 32, 30, 31, 33); /*轉換的對照表*/
                            /*以下是防呆*/
                            if (viewValue.length != 10) {
                                ctrl.$setValidity('onlyIdentityNo', false);
                                return undefined;
                            }
                            else if (viewValue.charCodeAt(0) < "A".charCodeAt(0) || viewValue.charCodeAt(0) > "Z".charCodeAt(0)) {
                                ctrl.$setValidity('onlyIdentityNo', false);
                                return undefined;
                            }
                            else if (viewValue.charCodeAt(1) != "1".charCodeAt(0) && viewValue.charCodeAt(1) != "2".charCodeAt(0)) {
                                ctrl.$setValidity('onlyIdentityNo', false);
                                return undefined;
                            }
                            else {
                                for (var i = 2; i < 10; i++) {
                                    if (viewValue.charCodeAt(i) < "0".charCodeAt(0) || viewValue.charCodeAt(i) > "9".charCodeAt(0)) {
                                        ctrl.$setValidity('onlyIdentityNo', false);
                                        return undefined;
                                    }
                                    else {
                                        pass++;
                                    }
                                }
                            }
                            if (pass != 8) {
                                ctrl.$setValidity('onlyIdentityNo', false);
                                return undefined;
                            }
                            /*以上是防呆*/
                            num[1] = table[viewValue.charCodeAt(0) - 65] % 10;
                            num[0] = (table[viewValue.charCodeAt(0) - 65] - num[1]) / 10;
                            for (i = 1; i < 10; i++)
                                num[i + 1] = viewValue.charCodeAt(i) - 48;
                            for (i = 1; i < 9; i++)
                                num[i] = num[i] * (10 - i);
                            for (i = 0; i < 11; i++)
                                sum += num[i];
                            if (sum % 10 == 0) {
                                ctrl.$setValidity('onlyIdentityNo', true);
                                return viewValue;
                            }
                            else {
                                ctrl.$setValidity('onlyIdentityNo', false);
                                return undefined;
                            }
                        });
                    }
                };
            });
        })(Utils = Ng.Utils || (Ng.Utils = {}));
    })(Ng = NSquared.Ng || (NSquared.Ng = {}));
})(NSquared || (NSquared = {}));
//# sourceMappingURL=onlyIdentityNoDirective.js.map