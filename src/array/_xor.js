import _ from 'lodash';

export function _xor() {
    console.log('#################### _.xor #########################');

    console.log(_.xor([2, 1], [2, 3]));
    // => [1, 3]
}