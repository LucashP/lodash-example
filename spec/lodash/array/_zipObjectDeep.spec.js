import _ from 'lodash';

describe('_.zipObjectDeep spec', function () {

    it('should zip value array to path provided in props array - dimensions are the same', function () {
        // given
        const props1 = ['a.b[0].c', 'a.b[1].d'];
        const values1 = [1, 2];

        const props2 = ['a[0].b.c', 'a[1].b.d', 'a[0].c.e'];
        const values2 = [1, 2, null];

        // when
        const result1 = _.zipObjectDeep(props1, values1);
        const result2 = _.zipObjectDeep(props2, values2);

        // then
        expect(result1).toEqual({a: {b: [{c: 1}, {d: 2}]}});
        expect(result2).toEqual({a: [{b: {c: 1}, c: {e: null}}, {b: {d: 2}}]});
    });

    it('should zip value array to path provided in props array - different dimensions', function () {
        // given
        const props1 = ['a[0].b.c', 'a[1].b.d'];
        const values1 = [1, 2, 3];

        const props2 = ['a[0].b.c', 'a[1].b.d'];
        const values2 = [1];

        // when
        const result1 = _.zipObjectDeep(props1, values1);
        const result2 = _.zipObjectDeep(props2, values2);

        // then
        expect(result1).toEqual({a: [{b: {c: 1}}, {b: {d: 2}}]});
        expect(result2).toEqual({a: [{b: {c: 1}}, {b: {d: undefined}}]});
    });
});

