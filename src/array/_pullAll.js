import _ from 'lodash';

export function _pullAll() {
    console.log('#################### _.pullAll #########################');

    const array = ['a', 'b', 'c', 'a', 'b', 'c'];

    _.pullAll(array, ['a', 'c']);
    console.log(array);
    // => ['b', 'b']
}

