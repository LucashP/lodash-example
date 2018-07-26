import _ from 'lodash';

export function _nth() {
    console.log('#################### _.nth #########################');

    const array = ['a', 'b', 'c', 'd'];

    console.log(_.nth(array, 1));
    // => 'b'

    console.log(_.nth(array, -2));
    // => 'c';
}

