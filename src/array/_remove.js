import _ from 'lodash';

export function _remove() {
    console.log('#################### _.remove #########################');

    const array = [1, 2, 3, 4];
    const evens = _.remove(array, function (n) {
        return n % 2 === 0;
    });

    console.log(array);
    // => [1, 3]

    console.log(evens);
    // => [2, 4]
}