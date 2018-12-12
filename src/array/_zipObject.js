import _ from 'lodash';

export function _zipObject() {
    console.log('#################### _.zipObject #########################');

    console.log(_.zipObject(['a', 'b'], [1, 2]));
    // => { 'a': 1, 'b': 2 }
}