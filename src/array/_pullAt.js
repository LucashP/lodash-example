import _ from 'lodash';

export function _pullAt() {
    console.log('#################### _.pullAt #########################');

    const array = ['a', 'b', 'c', 'd'];
    const pulled = _.pullAt(array, [1, 3]);

    console.log(array);
    // => ['a', 'c']

    console.log(pulled);
    // => ['b', 'd']
}

