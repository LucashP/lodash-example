import _ from 'lodash';

export function _sortedLastIndex() {
    console.log('#################### _.sortedLastIndex #########################');

    console.log(_.sortedLastIndex([4, 5, 5, 5, 6], 5));
    // => 4

    console.log(_.sortedLastIndex([30, 50], 40));
    // => 1
}

