import _ from 'lodash';

export function _xorWith() {
    console.log('#################### _.xorWith #########################');

    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

    console.log(_.xorWith(objects, others, _.isEqual));
    // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
}