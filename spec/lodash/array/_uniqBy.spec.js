import _ from 'lodash';

describe('_.unzip spec', function () {

    it('should create array with regrouped elements', function () {
        // given
        const array1 = [['a', 1, true], ['b', 2, false]];
        const array2 = [['a', 1, true], ['b', 2, false], ['c', 3, false]];
        const array3 = [['a', undefined, true, 'x'], ['b', 2, false, 'y'], ['c', 3, undefined, 'z']];
        const array4 = [['a', 1, true, 'x'], ['b', 2, false, 'y']];

        // when
        const result1 = _.unzip(array1);
        const result2 = _.unzip(array2);
        const result3 = _.unzip(array3);
        const result4 = _.unzip(array4);

        // then
        expect(result1).toEqual([['a', 'b'], [1, 2], [true, false]]);
        expect(result2).toEqual([['a', 'b', 'c'], [1, 2, 3], [true, false, false]]);
        expect(result3).toEqual([['a', 'b', 'c'],
            [undefined, 2, 3],
            [true, false, undefined],
            ['x', 'y', 'z']
        ]);
        expect(result4).toEqual([['a', 'b'], [1, 2], [true, false], ['x', 'y']]);
    });
});