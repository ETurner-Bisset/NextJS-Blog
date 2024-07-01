const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'eturnerbisset',
        mongodb_password: 'mhydezlUJAsCdu12',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'messages-dev',
      },
    };
  }
  return {
    env: {
      mongodb_username: 'eturnerbisset',
      mongodb_password: 'mhydezlUJAsCdu12',
      mongodb_cluster: 'cluster0',
      mongodb_database: 'messages-prod',
    },
  };
};
