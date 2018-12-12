import _ from 'lodash';

export function _flatMap() {
    console.log('#################### _.flatMap #########################');

    function duplicate(n) {
        return [n, n];
    }

    console.log(_.flatMap([1, 2], duplicate));
    // => [1, 1, 2, 2]
}

