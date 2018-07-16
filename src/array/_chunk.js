import _ from 'lodash';

export function _chunk() {
    console.log('#################### _.chunk #########################');

    console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
    console.log(_.chunk(['a', 'b', 'c', 'd'], 3));
    console.log(_.chunk(['a', 'b', 'c', 'd'], 1));
    console.log(_.chunk(['a', 'b', 'c', 'd', 'e'], 2));
}