import _ from 'lodash';

export function _eachRight() {
    console.log('#################### _.eachRight #########################');

    _.eachRight([1, 2], function(value) {
        console.log(value);
    });
    // => Logs `2` then `1`.

    _.forEachRight([1, 2], function(value) {
        console.log(value);
    });
    // => Logs `2` then `1`.
}

