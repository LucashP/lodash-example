import Jasmine from 'jasmine';

const jasmine = new Jasmine();
jasmine.loadConfigFile('config/jasmine/json/lodash.json');
jasmine.execute();