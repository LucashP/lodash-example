import _ from 'lodash';

export function _pull() {
    console.log('#################### _.pull #########################');

    const array = ['a', 'b', 'c', 'a', 'b', 'c'];

    _.pull(array, 'a', 'c');
    console.log(array);
    // => ['b', 'b']
}

