describe('Range Filter', function () {
    'use strict';

    var $filter;

    //// Mock $filter
    beforeEach(function () {
        module('NSquared.Ng.Utils');

        inject(function (_$filter_) {
            $filter = _$filter_;
        });

    });

    it('should create a range', function () {

        var emptyAry = function(){
            return [];
        };

        var act = {
            createRule1 : $filter('nsRange')('a', 1, 'NSquared.Ng.Utils'),
            useStringParameter2 : $filter('nsNumberFitLength')(1, 'b', 'NSquared.Ng.Utils')
        };

        // Assert.
        expect(act.useStringParameter1).toEqual('a');

    });

});