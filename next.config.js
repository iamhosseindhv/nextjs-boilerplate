const path = require('path');

module.exports = {
    webpack: (conf) => {
        const config = conf;
        config.resolve.alias = {
            ...config.resolve.alias,
            react: path.resolve('./node_modules/react'),
        };

        return config;
    },
};
