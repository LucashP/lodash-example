import _ from 'lodash';

export function _fromPairs() {
    console.log('#################### _.fromPairs #########################');

    console.log(_.fromPairs([['a', 1], ['b', 2]]));
    // => { 'a': 1, 'b': 2 }

    console.log(_.fromPairs([['a', 1, 'test1'], ['b', 2, 'test2']]));
    console.log(_.fromPairs([['a', 'test1', 1], ['b', 'test2', 2]]));

    console.log(_.fromPairs([['a', 'test1', 1], ['a', 'test2', 2]]));
}
