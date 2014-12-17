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
            createRule1 : $filter('nsRange')(emptyAry(), 1, 5, 'NSquared.Ng.Utils'),
            createRule2 : $filter('nsRange')(emptyAry(), 4, 5, 'NSquared.Ng.Utils'),
            createRule3 : $filter('nsRange')(emptyAry(), 1, 1, 'NSquared.Ng.Utils'),
            createRule4 : $filter('nsRange')(emptyAry(), 5, 3, 'NSquared.Ng.Utils')
        };

        // Assert.
        expect(act.createRule1).toEqual([ 1, 2, 3, 4, 5 ]);
        expect(act.createRule2).toEqual([ 4, 5 ]);
        expect(act.createRule3).toEqual([ 1 ]);
        expect(act.createRule4).toEqual([ ]);
    });

});