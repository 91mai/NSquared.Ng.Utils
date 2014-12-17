var NSquared;
(function (NSquared) {
    var Ng;
    (function (Ng) {
        var Utils;
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
        })(Utils = Ng.Utils || (Ng.Utils = {}));
    })(Ng = NSquared.Ng || (NSquared.Ng = {}));
})(NSquared || (NSquared = {}));
//# sourceMappingURL=numberFitLengthFilter.js.map