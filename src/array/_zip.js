import _ from 'lodash';

export function _zip() {
    console.log('#################### _.zip #########################');

    console.log(_.zip(['a', 'b'], [1, 2], [true, false]));
    // => [['a', 1, true], ['b', 2, false]]
}