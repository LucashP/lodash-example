import _ from 'lodash';

describe('_.nth spec', function () {

    it('should retrieve element by index', function () {
        // given
        const array = ['a', 'b', 'c', 'd'];

        // when
        const result1 = _.nth(array, 1);
        const result2 = _.nth(array, -2);

        // then
        expect(result1).toEqual('b');
        expect(result2).toEqual('c');
    });
});

