import _ from 'lodash';

export function _unionWith() {
    console.log('#################### _.unionWith #########################');

    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

    console.log(_.unionWith(objects, others, _.isEqual));
    // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
}

