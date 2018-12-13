import _ from 'lodash';

describe('_.unzipWith spec', function () {

    fit('should exclude all given values', function () {
        // given
        const array1 = [2, 1, 2, 3];

        const zipped = _.zip([1, 2], [10, 20], [100, 200]);
        // console.log(zipped);
        // // => [[1, 10, 100], [2, 20, 200]]
        //
        // console.log(_.unzipWith(zipped, _.add));
        // // => [3, 30, 300]

        console.log(_.unzipWith(zipped, function(test){
            console.log(test);
            return test;
        }));
        // when
        const result1 = _.without(array1, 1, 2);
        const result2 = _.without(array1, [1, 2]);
        const result3 = _.without(array1, 3, 1);
        const result4 = _.without(array1);

        // then
        expect(array1).toEqual([2, 1, 2, 3]);
        expect(result1).toEqual([3]);
        expect(result2).toEqual([2, 1, 2, 3]);
        expect(result3).toEqual([2, 2]);
        expect(result4).toEqual([2, 1, 2, 3]);
    });
});