const deployCommands = {
  usage: 'Helps you lay deploy in parallel or in sequence',
  lifecycleEvents: [
    'deployHandler'
  ],
  options: {
    'sm-parallel': {
      usage:
        'Specify if you want to deploy parallel '
        + '(e.g. "--sm-parallel \'true\'")',
    },
    'sm-scope': {
      usage:
        'Specify if you want to deploy local features or global '
        + '(e.g. "--sm-scope \'local\'")',
    },
    'sm-features': {
      usage:
        'Specify the local features you want to deploy '
        + '(e.g. "--sm-feature \'users\'")',
    },
    'sm-ignore-build': {
      usage:
        'Specify if you want to ignore the build before deploy '
        + '(e.g. "--sm-ignore-build \'true\'")',
    }
  }
};

module.exports = deployCommands;
