import Jasmine from 'jasmine';

const jasmine = new Jasmine();
jasmine.loadConfigFile('config/jasmine/json/jasmine.json');
jasmine.execute();