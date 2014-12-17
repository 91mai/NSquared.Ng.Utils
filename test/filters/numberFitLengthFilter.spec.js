describe('NumberFitLength Filter', function () {
    'use strict';

    var $filter;

    //// Mock $filter
    beforeEach(function () {
        module('NSquared.Ng.Utils');

        inject(function (_$filter_) {
            $filter = _$filter_;
        });

    });

    it('should identify parameters are number type', function () {

        var act = {
            useStringParameter1 : $filter('nsNumberFitLength')('a', 1, 'NSquared.Ng.Utils'),
            useStringParameter2 : $filter('nsNumberFitLength')(1, 'b', 'NSquared.Ng.Utils')
        };

        // Assert.
        expect(act.useStringParameter1).toEqual('a');
        expect(act.useStringParameter2).toEqual(1);

    });

    it('should fit length', function () {

        var act = {
            fitRule1 : $filter('nsNumberFitLength')(1, 1, 'NSquared.Ng.Utils'),
            fitRule2 : $filter('nsNumberFitLength')(10, 1, 'NSquared.Ng.Utils'),
            fitRule3 : $filter('nsNumberFitLength')(123, 3, 'NSquared.Ng.Utils'),
            fitRule4 : $filter('nsNumberFitLength')(123, 5, 'NSquared.Ng.Utils')
        };

        // Assert.
        expect(act.fitRule1).toEqual('1');
        expect(act.fitRule2).toEqual('10');
        expect(act.fitRule3).toEqual('123');
        expect(act.fitRule4).toEqual('00123');
    });

});