import _ from 'lodash';

describe('_.findIndex spec', function () {

    it('should find index of user using custom predicate', function () {
        // given
        const letters = ['a', 'b', 'c'];

        // when
        const result = _.first(letters);

        // then
        expect(result).toEqual('a');
    });
});