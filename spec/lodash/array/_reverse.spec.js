import _ from 'lodash';

describe('_.reverse spec', function () {

    it('should reverse array', function () {
        // given
        const array = [1, 2, 3];

        // when
        const result = _.reverse(array);

        // then
        expect(result).toEqual([3, 2, 1]);
        expect(array).toEqual([3, 2, 1]);
    });
});