import _ from 'lodash';

export function _unionBy() {
    console.log('#################### _.unionBy #########################');

    console.log(_.unionBy([2.1], [1.2, 2.3], Math.floor));
    // => [2.1, 1.2]

    // The `_.property` iteratee shorthand.
    console.log(_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'));
    // => [{ 'x': 1 }, { 'x': 2 }]
}

