const packagejson = require('./package.json');
module.exports = cfg => {
  const dev = cfg.env === 'development';
  return {
    map: dev ? { inline: false } : false,
    syntax: 'postcss-scss',
    plugins: [
      require('postcss-advanced-variables')(),
      require('postcss-nested')(),
      require('postcss-mixins')(),
      require('postcss-sorting')(),
      require('postcss-preset-env')(),
      require('colorguard')(),
      require('doiuse')({ browsers: packagejson.browserslist }),
      require('autoprefixer')({ grid: true }),
      dev ? null : require('cssnano')() // NEW
    ]
  };
};
