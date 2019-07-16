const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const JUnitXmlReporter = require('jasmine-reporters').JUnitXmlReporter;

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      displayPending: true,
      displayDuration: true,
    },
    summary: {
      displayDuration: true,
      displayStacktrace: true,
    },
  }),
);
jasmine.getEnv().addReporter(
  new JUnitXmlReporter({
    savePath: './test-reports/',
  }),
);
