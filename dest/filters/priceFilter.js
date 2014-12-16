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
