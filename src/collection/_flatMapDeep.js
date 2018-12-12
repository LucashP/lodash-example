import _ from 'lodash';

export function _flatMapDeep() {
    console.log('#################### _.flatMapDeep #########################');

    function duplicate(n) {
        return [[[n, n]]];
    }

    console.log(_.flatMapDeep([1, 2], duplicate));
    // => [1, 1, 2, 2]
}

