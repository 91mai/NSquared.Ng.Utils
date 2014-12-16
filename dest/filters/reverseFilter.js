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
