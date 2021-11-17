const babelConfigGenerator = function (modules, mode = 'production') {
  return {
    'presets': [
      [
        '@babel/preset-env', {
        'corejs': '3.19',
        'useBuiltIns': 'usage',
        'modules': modules
      }
      ],
      '@babel/preset-typescript',
      '@babel/react'
    ],
    'plugins': [
      '@babel/plugin-proposal-class-properties',
      [
        'transform-imports', {
        'lodash': {
          'transform': 'lodash/${member}',
          'preventFullImport': true
        }
      }
      ]
    ]
  };
};

module.exports = babelConfigGenerator;
