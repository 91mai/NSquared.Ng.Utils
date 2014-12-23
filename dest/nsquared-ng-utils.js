/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="../typings/jquery/jquery.d.ts"/>

var NSquared;
(function (NSquared) {
    (function (Ng) {
        (function (Utils) {
            angular.module('NSquared.Ng.Utils', []);
        })(Ng.Utils || (Ng.Utils = {}));
        var Utils = Ng.Utils;
    })(NSquared.Ng || (NSquared.Ng = {}));
    var Ng = NSquared.Ng;
})(NSquared || (NSquared = {}));

var NSquared;
(function (NSquared) {
    (function (Ng) {
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
                            } else {
                                // it is invalid, return undefined (no model update)
                                ctrl.$setValidity('onlyCellphone', false);
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

var NSquared;
(function (NSquared) {
    (function (Ng) {
        (function (Utils) {
            angular.module('NSquared.Ng.Utils').directive('nsOnlyIdentityNo', function () {
                return {
                    require: 'ngModel',
                    link: function (scope, elm, attrs, ctrl) {
                        ctrl.$parsers.unshift(function (viewValue) {
                            var pass = 0;
                            var num = new Array(11);
                            var sum = 0;

                            var table = new Array(10, 11, 12, 13, 14, 15, 16, 17, 34, 18, 19, 20, 21, 22, 35, 23, 24, 25, 26, 27, 28, 29, 32, 30, 31, 33);

                            /*以下是防呆*/
                            if (viewValue.length != 10) {
                                ctrl.$setValidity('onlyIdentityNo', false);
                                return undefined;
                            } else if (viewValue.charCodeAt(0) < "A".charCodeAt(0) || viewValue.charCodeAt(0) > "Z".charCodeAt(0)) {
                                ctrl.$setValidity('onlyIdentityNo', false);
                                return undefined;
                            } else if (viewValue.charCodeAt(1) != "1".charCodeAt(0) && viewValue.charCodeAt(1) != "2".charCodeAt(0)) {
                                ctrl.$setValidity('onlyIdentityNo', false);
                                return undefined;
                            } else {
                                for (var i = 2; i < 10; i++) {
                                    if (viewValue.charCodeAt(i) < "0".charCodeAt(0) || viewValue.charCodeAt(i) > "9".charCodeAt(0)) {
                                        ctrl.$setValidity('onlyIdentityNo', false);
                                        return undefined;
                                    } else {
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
                                num[i] = num[i] * (10 - i); /*套用公式*/
                            for (i = 0; i < 11; i++)
                                sum += num[i];
                            if (sum % 10 == 0) {
                                ctrl.$setValidity('onlyIdentityNo', true);
                                return viewValue;
                            } else {
                                ctrl.$setValidity('onlyIdentityNo', false);
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

var NSquared;
(function (NSquared) {
    (function (Ng) {
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
        })(Ng.Utils || (Ng.Utils = {}));
        var Utils = Ng.Utils;
    })(NSquared.Ng || (NSquared.Ng = {}));
    var Ng = NSquared.Ng;
})(NSquared || (NSquared = {}));

var NSquared;
(function (NSquared) {
    (function (Ng) {
        (function (Utils) {
            var WHITESPACE_REGEXP = /[\s　]/ig;
            angular.module('NSquared.Ng.Utils').directive('nsRemoveWhitespace', function () {
                return {
                    require: 'ngModel',
                    link: function (scope, elm, attrs, ctrl) {
                        function removeWhitespace(i) {
                            if (!i) {
                                return null;
                            }

                            return i.replace(WHITESPACE_REGEXP, '');
                        }
                        ctrl.$parsers.push(removeWhitespace);
                        ctrl.$formatters.push(removeWhitespace);
                    }
                };
            });
        })(Ng.Utils || (Ng.Utils = {}));
        var Utils = Ng.Utils;
    })(NSquared.Ng || (NSquared.Ng = {}));
    var Ng = NSquared.Ng;
})(NSquared || (NSquared = {}));

var NSquared;
(function (NSquared) {
    (function (Ng) {
        (function (Utils) {
            var NumberFitLengthFilter = (function () {
                function NumberFitLengthFilter() {
                }
                NumberFitLengthFilter.Factory = function ($log) {
                    return function (input, length) {
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
                    };
                };
                return NumberFitLengthFilter;
            })();
            Utils.NumberFitLengthFilter = NumberFitLengthFilter;

            angular.module('NSquared.Ng.Utils').filter('nsNumberFitLength', ['$log', NumberFitLengthFilter.Factory]);
        })(Ng.Utils || (Ng.Utils = {}));
        var Utils = Ng.Utils;
    })(NSquared.Ng || (NSquared.Ng = {}));
    var Ng = NSquared.Ng;
})(NSquared || (NSquared = {}));

var NSquared;
(function (NSquared) {
    (function (Ng) {
        (function (Utils) {
            var PriceFilter = (function () {
                function PriceFilter() {
                }
                PriceFilter.Factory = function ($log) {
                    return function (input) {
                        if (!input) {
                            return '$0';
                        }

                        input = parseFloat(input);

                        if (input % 1 === 0) {
                            input = input.toFixed(0);
                        }

                        return '$' + input;
                    };
                };
                return PriceFilter;
            })();
            Utils.PriceFilter = PriceFilter;

            var ZeroToNullFilter = (function () {
                function ZeroToNullFilter() {
                }
                ZeroToNullFilter.Factory = function ($log) {
                    return function (input) {
                        if (input === 0) {
                            return null;
                        }

                        return input;
                    };
                };
                return ZeroToNullFilter;
            })();
            Utils.ZeroToNullFilter = ZeroToNullFilter;

            angular.module('NSquared.Ng.Utils').filter('nsPrice', ['$log', PriceFilter.Factory]).filter('nsZeroToNull', ['$log', ZeroToNullFilter.Factory]);
        })(Ng.Utils || (Ng.Utils = {}));
        var Utils = Ng.Utils;
    })(NSquared.Ng || (NSquared.Ng = {}));
    var Ng = NSquared.Ng;
})(NSquared || (NSquared = {}));

var NSquared;
(function (NSquared) {
    (function (Ng) {
        (function (Utils) {
            var RangeFilter = (function () {
                function RangeFilter() {
                }
                RangeFilter.Factory = function ($log) {
                    return function (input, min, max) {
                        min = parseInt(min); //Make string input int
                        max = parseInt(max);

                        for (var i = min; i <= max; i++) {
                            input.push(i);
                        }

                        return input;
                    };
                };
                return RangeFilter;
            })();
            Utils.RangeFilter = RangeFilter;

            angular.module('NSquared.Ng.Utils').filter('nsRange', ['$log', RangeFilter.Factory]);
        })(Ng.Utils || (Ng.Utils = {}));
        var Utils = Ng.Utils;
    })(NSquared.Ng || (NSquared.Ng = {}));
    var Ng = NSquared.Ng;
})(NSquared || (NSquared = {}));

var NSquared;
(function (NSquared) {
    (function (Ng) {
        (function (Utils) {
            var ReverseFilter = (function () {
                function ReverseFilter() {
                }
                ReverseFilter.Factory = function ($log) {
                    return function (items) {
                        return items.slice(0).reverse();
                    };
                };
                return ReverseFilter;
            })();
            Utils.ReverseFilter = ReverseFilter;

            angular.module('NSquared.Ng.Utils').filter('nsReverse', ['$log', ReverseFilter.Factory]);
        })(Ng.Utils || (Ng.Utils = {}));
        var Utils = Ng.Utils;
    })(NSquared.Ng || (NSquared.Ng = {}));
    var Ng = NSquared.Ng;
})(NSquared || (NSquared = {}));

var NSquared;
(function (NSquared) {
    (function (Ng) {
        (function (Utils) {
            var UrlUtility = (function () {
                function UrlUtility() {
                }
                UrlUtility.prototype.GetQuerystring = function (name) {
                    try  {
                        var hash = document.location.hash;
                        var match = RegExp('[?&]' + name + '=([^&]*)').exec(document.location.search);
                        return match && decodeURIComponent(decodeURIComponent(match[1].replace(/\+/g, ' ')));
                    } catch (e) {
                        return null;
                    }
                };

                //// Source code from
                //// http://stackoverflow.com/questions/6953944/how-to-add-parameters-to-a-url-that-already-contains-other-parameters-and-maybe
                UrlUtility.prototype.AppendParameter = function (url, key, value, atStart) {
                    if (typeof atStart === "undefined") { atStart = false; }
                    var replaceDuplicates = true;

                    //// Get url without hash
                    var urlhash = '';
                    var urlLength = url.length;
                    if (url.indexOf('#') > 0) {
                        urlLength = url.indexOf('#');
                        urlhash = url.substring(url.indexOf('#'), url.length);
                    }

                    var sourceUrl = url.substring(0, urlLength);

                    //// Get url search part
                    var urlParts = sourceUrl.split("?");
                    var newQueryString = "";

                    //// Get new parameter query string
                    if (urlParts.length > 1) {
                        var parameters = urlParts[1].split("&");
                        for (var i = 0; (i < parameters.length); i++) {
                            var parameterParts = parameters[i].split("=");
                            if (!(replaceDuplicates && parameterParts[0] == key)) {
                                if (newQueryString == "")
                                    newQueryString = "?";
                                else
                                    newQueryString += "&";
                                newQueryString += parameterParts[0] + "=" + (parameterParts[1] ? parameterParts[1] : '');
                            }
                        }
                    }
                    if (newQueryString == "")
                        newQueryString = "?";

                    //// Append to url
                    if (atStart) {
                        newQueryString = '?' + key + "=" + value + (newQueryString.length > 1 ? '&' + newQueryString.substring(1) : '');
                    } else {
                        if (newQueryString !== "" && newQueryString != '?')
                            newQueryString += "&";
                        newQueryString += key + "=" + (value ? value : '');
                    }
                    return urlParts[0] + newQueryString + urlhash;
                };
                return UrlUtility;
            })();
            Utils.UrlUtility = UrlUtility;

            angular.module('NSquared.Ng.Utils').factory('UrlUtility', function () {
                return new UrlUtility();
            });
        })(Ng.Utils || (Ng.Utils = {}));
        var Utils = Ng.Utils;
    })(NSquared.Ng || (NSquared.Ng = {}));
    var Ng = NSquared.Ng;
})(NSquared || (NSquared = {}));
