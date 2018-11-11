const buildHelper = require('./build.helper');
const utils = require('../../utils');

class buildClass {
  async createFunctionsYml() {
    const feature = this.options.feature;
    const scope = this.options.scope;
    const srcPath = `${this.cwd}/src`;
    const basePathDuplicate = await utils.checkIfBasePathDuplicate(srcPath);
    let featureFunctions = [];
    if (scope && (scope !== 'local' && scope !== 'global')) {
      const errMsg = 'Invalid use of scope flag\n\n only set to "--scope local or --scope global" while using this flag'
      utils.log.errorMessage(errMsg);
      throw new Error(errMsg);
    }
    if (basePathDuplicate) {
      const errMsg = 'Duplicate basePath found in one of the feature functions.yml';
      utils.log.errorMessage(errMsg);
      throw new Error(errMsg);
    }
    if (feature) {
      featureFunctions = [{
        path: `${srcPath}/${feature}/${feature}-functions.yml`,
        name: feature
      }];
    } else {
      featureFunctions = utils.getFeaturePath(srcPath);
    }
    if (scope === 'local') {
      await buildHelper.localBuild(featureFunctions, feature, this.cwd);
      utils.log.info(`Local '${featureFunctions.map(f => f.name).join()}' feature build successful`);
    } else {
      await buildHelper.globalBuild(featureFunctions, feature, this.cwd);
      utils.log.info(`${feature ? `Global '${feature}' Feature` : 'Global'} build successful`);
    }
  }
}

module.exports = buildClass;
