import _ from 'lodash';

describe('_.intersectionWith spec', function () {

    it('should find intersection for two sets with comparing strategy', function () {
        // given
        const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
        const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

        // when
        const result = _.intersectionWith(objects, others, _.isEqual);

        // then
        expect(result).toEqual([{ 'x': 1, 'y': 2 }]);
    });
});

