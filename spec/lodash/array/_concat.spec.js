import _ from 'lodash';

describe('_.concat spec', function () {

    it('should concat elements to one array', function () {
        // given
        let array = [1];
        let array2 = [4];

        // when
        let actual = _.concat(array, 2, [3], [array2]);

        // then
        expect(actual).toEqual([1, 2, 3, [4]]);
    });

    it('should concat elements to one array - with flatten', function () {
        // given
        let array = [1, 10, 12];
        let array2 = [4];

        // when
        let other = _.concat(array, 2, [3], [array2]);

        // then
        expect(other).toEqual([1, 10, 12, 2, 3, [4]]);
    });

    it('should concat elements to one array - nested array reference', function () {
        // given
        let array = [1];
        let array2 = [4, 44];

        // when
        let other = _.concat(array, 2, [3], [array2]);

        // then
        expect(other).toEqual([1, 2, 3, [4, 44]]);
    });

    it('should concat elements to one array - unexpected update of array', function () {
        // given
        let array = [1];
        let array2 = [4];

        // when
        let other = _.concat(array, 2, [3], [array2]);
        array2.push(55);

        // then
        expect(other).toEqual([1, 2, 3, [4, 55]]);
    });
});
