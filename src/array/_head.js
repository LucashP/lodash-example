import _ from 'lodash';

export function _head() {
    console.log('#################### _.head #########################');

    console.log(_.head([1, 2, 3]));
    // => 1

    console.log(_.head([]));
    // => undefined
}