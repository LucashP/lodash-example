import _ from 'lodash';

export function _pullAllBy() {
    console.log('#################### _.pullAllBy #########################');

    const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

    _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
    console.log(array);
    // => [{ 'x': 2 }]
}

