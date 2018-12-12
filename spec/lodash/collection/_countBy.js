import _ from 'lodash';

export function _countBy() {
    console.log('#################### _.countBy #########################');

    console.log(_.countBy([6.1, 4.2, 6.3], Math.floor));
    // => { '4': 1, '6': 2 }

    // The `_.property` iteratee shorthand.
    console.log(_.countBy(['one', 'two', 'three'], 'length'));
    // => { '3': 2, '5': 1 }
}

