Package.describe({
  name: 'cinn:react-form-helpers',
  version: '1.1.0',
  summary: 'Simple react form helpers to facilitate the comunication between the component and the input data',
  git: 'https://github.com/cinn-labs/react-form-helpers',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.mainModule('react-form-helpers.js');
});
