import _ from 'lodash';

describe('_.join spec', function () {

    it('should join elements by provided separator', function () {
        // when
        const result1 = _.join(['a', 'b', 'c'], '~');
        const result2 = _.join([['a'], 'b', 'c'], '#');

        // then
        expect(result1).toEqual('a~b~c');
        expect(result2).toEqual('a#b#c');
    });

    it('should join nested elements by provided separator', function () {
        // when
        const result1 = _.join([['a'], 'b', 'c'], '#');
        const result2 = _.join([[['a']], 'b', ['c']], '#');
        const result3 = _.join([[['a', 'e', 'f'], ['b', 'g']], ['c', 'h'], 'd'], '_');

        // then
        expect(result1).toEqual('a#b#c');
        expect(result2).toEqual('a#b#c');
        expect(result3).toEqual('a,e,f,b,g_c,h_d');
    });

    it('should return empty string if provided array is null', function () {
        // when
        const result = _.join(null, '_');

        // then
        expect(result).toEqual('');
    });
});

