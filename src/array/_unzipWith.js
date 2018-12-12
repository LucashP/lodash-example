import _ from 'lodash';

export function _unzipWith() {
    console.log('#################### _.unzipWith #########################');

    const zipped = _.zip([1, 2], [10, 20], [100, 200]);
    console.log(zipped);
    // => [[1, 10, 100], [2, 20, 200]]

    console.log(_.unzipWith(zipped, _.add));
    // => [3, 30, 300]
}

