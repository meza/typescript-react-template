const packageJson = require('./package.json');

module.exports = (cfg) => {
  const dev = cfg.env === 'development';
  return {
    map: dev ? { inline: false } : false,
    syntax: 'postcss-scss',
    plugins: [
      'postcss-advanced-variables',
      'postcss-nested',
      'postcss-mixins',
      'postcss-sorting',
      'postcss-preset-env',
      'colorguard',
      [
        'doiuse',
        {
          browsers: packageJson.browserslist,
          ignoreFiles: [
            '**/sanitize.css',
            '**/sanitize.css/**'
          ]
        }
      ],
      [
        'autoprefixer',
        {
          grid: true
        }
      ],
      dev ? null : 'cssnano'
    ]
  };
};
