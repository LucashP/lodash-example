import _ from 'lodash';

export function _compact() {
    console.log(_.compact([0, 1, false, 2, '', 3]));
    console.log(_.compact([0, 1, null, 2, undefined]));
}