const cracoModuleFederation = require('craco-module-federation')
const CracoLessPlugin = require('craco-less')

module.exports = {
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true,
        },
        'antd',
      ],
    ],
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#c00',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
