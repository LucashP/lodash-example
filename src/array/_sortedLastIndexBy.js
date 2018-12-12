import _ from 'lodash';

export function _sortedLastIndexBy() {
    console.log('#################### _.sortedLastIndexBy #########################');

    const objects = [{ 'x': 4 }, { 'x': 5 }];

    console.log(_.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }));
    // => 1

    // The `_.property` iteratee shorthand.
    console.log(_.sortedLastIndexBy(objects, { 'x': 4 }, 'x'));
    // => 1
}

