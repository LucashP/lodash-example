import _ from 'lodash';

describe('_.compact spec', function () {

    it('should 0 and false elements from array', function () {
        // given
        let array = [0, 1, false, 2, '', 3];

        // when
        let actual = _.compact(array);

        // then
        expect(actual).toEqual([1, 2, 3]);
    });

    it('should 0 and null and undefined elements from array', function () {
        // given
        let array = [0, 1, null, 2, undefined];

        // when
        let actual = _.compact(array);

        // then
        expect(actual).toEqual([1, 2]);
    });
});