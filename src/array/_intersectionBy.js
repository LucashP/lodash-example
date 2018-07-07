import _ from 'lodash';

export function _intersectionBy() {
    console.log('#################### _.intersectionBy #########################');

    console.log(_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));
    // => [2.1]

    console.log(_.intersectionBy([2.3, 1.2], [2.1, 3.4], Math.floor));
    // => [2.3]

    // The `_.property` iteratee shorthand.
    console.log(_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'));
    // => [{ 'x': 1 }]
}

