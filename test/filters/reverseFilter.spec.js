describe('Reverse Filter', function () {
  'use strict'; 

  var $filter;

  //// Mock $filter
  beforeEach(function () {
    module('NSquared.Ng.Utils');

    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });

  it('should reverse an array', function () {
    // Arrange.
    var array = [1, 2, 3, 4, 5]

    // Act.
    var result = $filter('nsReverse')(array, 'NSquared.Ng.Utils');    

    // Assert.
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });
});