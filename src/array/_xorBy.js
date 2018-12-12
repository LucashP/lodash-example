import _ from 'lodash';

export function _xorBy() {
    console.log('#################### _.xorBy #########################');

    console.log(_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor));
    // => [1.2, 3.4]

    // The `_.property` iteratee shorthand.
    console.log(_.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'));
    // => [{ 'x': 2 }]
}