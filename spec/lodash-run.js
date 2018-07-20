import Jasmine from 'jasmine';

const jasmine = new Jasmine();
jasmine.loadConfigFile('spec/config/lodash.json');
jasmine.execute();