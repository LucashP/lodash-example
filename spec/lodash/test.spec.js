import {dummyCustomComparator} from '../../src/array/_differenceWith';

describe('test spec', function () {

    it('should be always true', function () {
        expect(dummyCustomComparator({x: 1}, {x: 2})).toBe(false);
        expect(dummyCustomComparator({x: 1}, {x: 1})).toBe(true);
    });
});