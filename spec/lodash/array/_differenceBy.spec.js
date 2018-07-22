import _ from 'lodash';

describe('_.differenceBy spec', function () {

    it('should get difference between sets of number using Math.floor strategy', function () {
        // given
        let array1 = [2.1, 1.2];
        let array2 = [2.3, 3.4];

        // when
        let result = _.differenceBy(array1, array2, Math.floor);

        // then
        expect(result).toEqual([1.2]);
    });

    it('should get difference between sets of objects using nested property', function () {
        // given
        let array1 = [{'x': 2}, {'x': 1}];
        let array2 = [{'x': 1}];

        // when
        let result = _.differenceBy(array1, array2, 'x');

        // then
        expect(result).toEqual([{x: 2}]);
    });

    it('should get difference between sets of objects using nested property retrieved by _.property strategy', function () {
        // given
        let array1 = [{'x': 2}, {'x': 1}];
        let array2 = [{'x': 1}];

        // when
        let result = _.differenceBy(array1, array2, _.property('x'));

        // then
        expect(result).toEqual([{x: 2}]);
    });

    it('should get difference between sets of objects using nested property retrieved by _.property strategy - second set contains no \'y\' property', function () {
        // given
        let array1 = [{'x': 2, 'y': 2}, {'x': 1, 'y': 1}, {'x': 1, 'y': 2}];
        let array2 = [{'x': 2}];

        // when
        let result = _.differenceBy(array1, array2, _.property('x'));

        // then
        expect(result).toEqual([{x: 1, y: 1}, {x: 1, y: 2}]);
    });

    it('should get difference between sets of objects using nested property retrieved by _.property strategy - second set contains no \'x\' property', function () {
        // given
        let array1 = [{'x': 2, 'y': 2}, {'x': 1, 'y': 1}, {'x': 1, 'y': 2}];
        let array2 = [{'y': 2}];

        // when
        let result = _.differenceBy(array1, array2, _.property('x'));

        // then
        expect(result).toEqual(array1);
    });
});