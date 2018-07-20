import Jasmine from 'jasmine';

const jasmine = new Jasmine();
jasmine.loadConfigFile('spec/config/jasmine.json');
jasmine.execute();