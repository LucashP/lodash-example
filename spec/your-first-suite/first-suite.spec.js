import _ from 'lodash';

describe('A suite', function() {
    it('contains spec with an expectation', function() {
        console.log(_.isBoolean(1===1));
        expect(true).toBe(true);
    });
});