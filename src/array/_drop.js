import _ from 'lodash';

export function _drop() {
    console.log(_.drop([1, 2, 3]));
    console.log(_.drop([1, 2, 3], 2));
    console.log(_.drop([1, 2, 3], 5));
    console.log(_.drop([1, 2, 3], 0));

    const arr = [1, 2, 3, 4, 5];
    console.log(_.drop(arr, 3));
    console.log(arr);
}

