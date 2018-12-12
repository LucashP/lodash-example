import _ from 'lodash';

export function _findLast() {
    console.log('#################### _.findLast #########################');

    const result = _.findLast([1, 2, 3, 4], function(n) {
        return n % 2 === 1;
    });
    console.log(result);
    // => 3
}

