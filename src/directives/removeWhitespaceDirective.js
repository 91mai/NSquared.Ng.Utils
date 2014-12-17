var NSquared;
(function (NSquared) {
    var Ng;
    (function (Ng) {
        var Utils;
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
        })(Utils = Ng.Utils || (Ng.Utils = {}));
    })(Ng = NSquared.Ng || (NSquared.Ng = {}));
})(NSquared || (NSquared = {}));
//# sourceMappingURL=removeWhitespaceDirective.js.map