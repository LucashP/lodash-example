import _ from 'lodash';

export function _reverse() {
    console.log('#################### _.reverse #########################');

    const array = [1, 2, 3];

    console.log(_.reverse(array));
    // => [3, 2, 1]

    console.log(array);
    // => [3, 2, 1]
}