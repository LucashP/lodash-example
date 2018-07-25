import _ from 'lodash';

export function _join() {
    console.log('#################### _.join #########################');

    console.log(_.join(['a', 'b', 'c'], '~'));
    // => 'a~b~c'

    console.log(_.join([['a'], 'b', 'c'], '#'));
    // => 'a#b#c'

    console.log(_.join([[['a', 'e', 'f'], ['b', 'g']], ['c', 'h'], 'd'], '_'));
    // => 'a,e,f,b,g_c,h_d'

    console.log(_.join(null, '_'));
    // => ''

    console.log(_.join(null, '_') === '');
}

