import _ from 'lodash';

describe('_.remove spec', function () {

    it('should remove elements from array with provided strategy', function () {
        // given
        const array = [1, 2, 3, 4];

        // when
        const result = _.remove(array, function (n) {
            return n % 2 === 0;
        });

        // then
        expect(result).toEqual([2, 4]);
        expect(array).toEqual([1, 3]);
    });
});