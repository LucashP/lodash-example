import _ from 'lodash';

export function _take() {
    console.log('#################### _.take #########################');

    console.log(_.take([1, 2, 3]));
    // => [1]

    console.log(_.take([1, 2, 3], 2));
    // => [1, 2]

    console.log(_.take([1, 2, 3], 5));
    // => [1, 2, 3]

    console.log(_.take([1, 2, 3], 0));
    // => []
}

