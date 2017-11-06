var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!\/__)/], // <-- necessary for Firebase OAuth
  stripPrefix: 'dist/client',
  root: 'dist/client/',
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: 'cli-universal',
      filename: 'service-worker.js',
      staticFileGlobs: [
        'dist/client/index.html',
        'dist/client/**.js',
        'dist/client/**.css'
      ],
      stripPrefix: 'dist/client/assets/',
      mergeStaticsConfig: true // if you don't set this to true, you won't see any webpack-emitted assets in your serviceworker config
    })
  ],
  runtimeCaching: [{
    urlPattern: /(\/|\/about)$/,
    handler: 'networkFirst'
  }]
};
