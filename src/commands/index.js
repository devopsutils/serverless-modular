const smFeatureCommand = require('./feature/feature.command');
const smFunctionCommand = require('./function/function.command');
const smBuildCommand = require('./build/build.command');
const smInitCommand = require('./init/init.command');
const smDeployCommand = require('./deploy/deploy.command');

const SmFeatureController = require('./feature/feature.controller');
const SmFunctionController = require('./function/function.controller');
const SmBuildController = require('./build/build.controller');
const SmInitController = require('./init/init.controller');
const SmDeployController = require('./deploy/deploy.controller');

const smFeatureController = new SmFeatureController();
const smFunctionController = new SmFunctionController();
const smBuildController = new SmBuildController();
const smInitController = new SmInitController();
const smDeployController = new SmDeployController();

module.exports = {
  smFeature: {
    command: smFeatureCommand,
    controller: smFeatureController.featureHandler
  },
  smFunction: {
    command: smFunctionCommand,
    controller: smFunctionController.createFunction
  },
  smBuild: {
    command: smBuildCommand,
    controller: smBuildController.createFunctionsYml
  },
  smInit: {
    command: smInitCommand,
    controller: smInitController.initHandler
  },
  smDeploy: {
    command: smDeployCommand,
    controller: smDeployController.deployHandler
  }
};
