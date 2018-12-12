import _ from 'lodash';

export function _without() {
    console.log('#################### _.without #########################');

    console.log(_.without([2, 1, 2, 3], 1, 2));
    // => [3]
}