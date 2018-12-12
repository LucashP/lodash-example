import _ from 'lodash';

export function _union() {
    console.log('#################### _.union #########################');

    console.log(_.union([2], [1, 2]));
    // => [2, 1]
}

