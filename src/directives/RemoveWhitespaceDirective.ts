module NSquared.Ng.Utils {
    var WHITESPACE_REGEXP = /[\s　]/ig;
    angular.module('NSquared.Ng.Utils')
        .directive('nsRemoveWhitespace', (): ng.IDirective => {
            return {
                require: 'ngModel',
                link: (scope, elm, attrs, ctrl) => {
                    function removeWhitespace(i: string) {
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
} 