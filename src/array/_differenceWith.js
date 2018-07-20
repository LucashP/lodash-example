import _ from 'lodash';

export function _differenceWith() {
    const objects1 = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
    console.log(_.differenceWith(objects1, [{'x': 1, 'y': 2}], _.isEqual));

    const objects2 = [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
    console.log(_.differenceWith(objects2, [{'x': 1}], _.isEqual));

    console.log(_.differenceWith(objects2, [{'x': 1}], dummyCustomComparator));
    console.log(_.differenceWith(objects2, [{'x': 2}], dummyCustomComparator));

    console.log(objects1);
    console.log(objects2);
}

export function dummyCustomComparator(a, b) {
    return a.x === b.x;
}
