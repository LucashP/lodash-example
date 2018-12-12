import _ from 'lodash';

export function _each() {
    console.log('#################### _.each #########################');

    _.each([1, 2], function (value) {
        console.log(value);
    });
    // => Logs `1` then `2`.

    _.each({'a': 1, 'b': 2}, function (value, key) {
        console.log(key);
    });
    // => Logs 'a' then 'b' (iteration order is not guaranteed).

    _.forEach([1, 2], function(value) {
        console.log(value);
    });
    // => Logs `1` then `2`.

    _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
        console.log(key);
    });
    // => Logs 'a' then 'b' (iteration order is not guaranteed).
}
