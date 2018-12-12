import _ from 'lodash';

export function _zipObjectDeep() {
    console.log('#################### _.zipObjectDeep #########################');

    console.log(_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]));
    // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
}