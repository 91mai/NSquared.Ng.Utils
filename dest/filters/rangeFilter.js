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
