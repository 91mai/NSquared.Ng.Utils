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
