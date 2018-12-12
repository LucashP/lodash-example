import _ from 'lodash';

export function _uniqBy() {
    console.log('#################### _.uniqBy #########################');

    console.log(_.uniqBy([2.1, 1.2, 2.3], Math.floor));
    // => [2.1, 1.2]

    // The `_.property` iteratee shorthand.
    console.log(_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x'));
    // => [{ 'x': 1 }, { 'x': 2 }]
}

