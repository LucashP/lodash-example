import _ from 'lodash';
import {dummyCustomComparator} from '../../../src/array/_differenceWith';

describe('_.pullAllWith spec', function () {

    it('should remove elements listed as array param in method with equal comparator', function () {
        // given
        const array1 = [{'x': 1, 'y': 2}, {'x': 3, 'y': 4}, {'x': 5, 'y': 6}];
        const array2 = [{'x': 1, 'y': 2}, {'x': 3, 'y': 4}, {'x': 3, 'y': 3}, {'x': 5, 'y': 6}];

        // when
        const result1 = _.pullAllWith(array1, [{'x': 3, 'y': 4}], _.isEqual);
        const result2 = _.pullAllWith(array2, [{'x': 3, 'y': 4}], _.isEqual);

        // then
        expect(result1).toEqual([{'x': 1, 'y': 2}, {'x': 5, 'y': 6}]);
        expect(array1).toEqual([{'x': 1, 'y': 2}, {'x': 5, 'y': 6}]);
        expect(result2).toEqual([{'x': 1, 'y': 2}, {'x': 3, 'y': 3}, {'x': 5, 'y': 6}]);
        expect(array2).toEqual([{'x': 1, 'y': 2}, {'x': 3, 'y': 3}, {'x': 5, 'y': 6}]);
    });

    it('should remove elements listed as array param in method with dummy comparator', function () {
        // given
        const array = [{'x': 1, 'y': 2}, {'x': 3, 'y': 4}, {'x': 3, 'y': 3}, {'x': 5, 'y': 6}];

        // when
        const result = _.pullAllWith(array, [{'x': 3, 'y': 4}], dummyCustomComparator);

        // then
        expect(result).toEqual([{'x': 1, 'y': 2}, {'x': 5, 'y': 6}]);
        expect(array).toEqual([{'x': 1, 'y': 2}, {'x': 5, 'y': 6}]);
    });
});

