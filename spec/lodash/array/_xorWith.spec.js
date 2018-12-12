import _ from 'lodash';

describe('_.xorWith spec', function () {

    it('should create symmetric difference of given arrays', function () {
        // given
        const objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
        const others = [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}];

        // when
        const result = _.xorWith(objects, others, _.isEqual);

        // then
        expect(result).toEqual([{'x': 2, 'y': 1}, {'x': 1, 'y': 1}]);
    });
});