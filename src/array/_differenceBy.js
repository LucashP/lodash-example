import _ from 'lodash';

export function _differenceBy() {
    console.log('#################### _.differenceBy #########################');

    console.log(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
    console.log(_.differenceBy([{'x': 2}, {'x': 1}], [{'x': 1}], 'x'));
    console.log(_.differenceBy([{'x': 2}, {'x': 1}], [{'x': 1}], _.property('x')));

    console.log(_.differenceBy([{'x': 2, 'y': 2}, {'x': 1, 'y': 1}, {'x': 1, 'y': 2}], [{'x': 1}], _.property('x')));
    console.log(_.differenceBy([{'x': 2, 'y': 2}, {'x': 1, 'y': 1}, {'x': 1, 'y': 2}], [{'x': 2}], _.property('x')));
}