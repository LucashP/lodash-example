import _ from 'lodash';

export function _sortedIndexBy() {
    console.log('#################### _.sortedIndexBy #########################');

    const objects = [{ 'x': 4 }, { 'x': 5 }];

    console.log(_.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }));
    // => 0

    // The `_.property` iteratee shorthand.
    console.log(_.sortedIndexBy(objects, { 'x': 4 }, 'x'));
    // => 0
}

