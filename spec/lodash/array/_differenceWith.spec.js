import _ from 'lodash';
import {dummyCustomComparator} from '../../../src/array/_differenceWith';

describe('_.differenceWith spec', function () {

    describe('when _.isEqual method is used as strategy', function () {
        it('should retrieve difference between two sets', function () {
            // given
            const arr1 = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
            const arr2 = [{'x': 1, 'y': 2}];

            // when
            const result = _.differenceWith(arr1, arr2, _.isEqual);

            // then
            expect(result).toEqual([{'x': 2, 'y': 1}]);
        });

        it('should retrieve difference between two sets - changed order', function () {
            // given
            const arr1 = [{'x': 1, 'y': 2}];
            const arr2 = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];

            // when
            const result = _.differenceWith(arr1, arr2, _.isEqual);

            // then
            expect(result).toEqual([]);
        });

        it('should retrieve difference between two sets - objects has missing properties', function () {
            // given
            const arr1 = [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
            const arr2 = [{'x': 1}];

            // when
            const result = _.differenceWith(arr1, arr2, _.isEqual);

            // then
            expect(result).toEqual(arr1);
        });
    });

    describe('when dummyCustomComparator method is used as strategy', function () {
        it('should two objects has the same x value', function () {
            // when
            const result1 = dummyCustomComparator({'x': 1, 'y': 2}, {'x': 1, 'y': 1});
            const result2 = dummyCustomComparator({'x': 1}, {'x': 1});
            const result3 = dummyCustomComparator({'x': 1, 'y': 1}, {'x': 2, 'y': 1});
            const result4 = dummyCustomComparator({'x': 1}, {'x': 2});

            // then
            expect(result1).toBe(true);
            expect(result2).toBe(true);
            expect(result3).toBe(false);
            expect(result4).toBe(false);
        });

        it('should retrieve difference between two sets - with different number of properties', function () {
            // given
            const arr1 = [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
            const arr2 = [{'x': 1}];
            const arr3 = [{'x': 2}];

            // when
            const result1 = _.differenceWith(arr1, arr2, dummyCustomComparator);
            const result2 = _.differenceWith(arr1, arr3, dummyCustomComparator);

            // then
            expect(result1).toEqual([{'x': 2, 'y': 1}]);
            expect(result2).toEqual([{'x': 1, 'y': 1}, {'x': 1, 'y': 2}]);
        });
    });
});