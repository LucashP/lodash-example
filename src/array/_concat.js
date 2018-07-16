import _ from 'lodash';

export function _concat() {
    console.log('#################### _.concat #########################');

    let array = [1];
    let array2 = [4];
    let other = _.concat(array, 2, [3], [array2]);
    console.log(other);
    console.log(array);

    array.push(10, 12);
    console.log(array);
    console.log(other);
    console.log(other[3]);

    array2.push(11, 13);
    console.log(other);
    console.log(other[3]);
}