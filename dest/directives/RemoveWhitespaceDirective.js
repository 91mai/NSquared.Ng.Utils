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
