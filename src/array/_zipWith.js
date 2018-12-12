import _ from 'lodash';

export function _zipWith() {
    console.log('#################### _.zipWith #########################');

    console.log(_.zipWith([1, 2], [10, 20], [100, 200], function (a, b, c) {
        return a + b + c;
    }));
    // => [111, 222]
}