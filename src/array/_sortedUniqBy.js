import _ from 'lodash';

export function _sortedUniqBy() {
    console.log('#################### _.sortedUniqBy #########################');

    console.log(_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor));
    // => [1.1, 2.3]
}

