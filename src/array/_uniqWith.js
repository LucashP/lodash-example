import _ from 'lodash';

export function _uniqWith() {
    console.log('#################### _.uniqWith #########################');

    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];

    console.log(_.uniqWith(objects, _.isEqual));
    // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
}

