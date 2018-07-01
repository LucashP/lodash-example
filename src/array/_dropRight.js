import _ from 'lodash';

export function _dropRight() {
    console.log(_.dropRight([1, 2, 3]));
    console.log(_.dropRight([1, 2, 3], 2));
    console.log(_.dropRight([1, 2, 3], 5));
    console.log(_.dropRight([1, 2, 3], 0));
}
