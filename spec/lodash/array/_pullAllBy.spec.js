import _ from 'lodash';

describe('_.pullAllBy spec', function () {

    it('should remove elements listed as array param in method with criteria', function () {
        // given
        const array = [{'x': 1}, {'x': 2}, {'x': 3}, {'x': 1}];

        // when
        const result = _.pullAllBy(array, [{'x': 1}, {'x': 3}], 'x');

        // then
        expect(result).toEqual([{'x': 2}]);
        expect(array).toEqual([{'x': 2}]);
    });
});



