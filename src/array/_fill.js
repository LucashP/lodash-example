import _ from 'lodash';

export function _fill() {
    console.log('#################### _.fill #########################');
    let array = [1, 2, 3];

    console.log(_.fill(array, 'a'));
    console.log(array);
    // => ['a', 'a', 'a']

    console.log(_.fill(Array(3), 2));
    // => [2, 2, 2]

    console.log(_.fill([4, 6, 8, 10], '*', 1, 3));
    // => [4, '*', '*', 10]

    console.log(_.fill([4, 6, 8, 10, 12], '*', 1, 3));
    // => [4, '*', '*', 10 ,12]
}