var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var argv = require('yargs').argv;

var root = argv.root || 'dist/client';

module.exports = {
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!\/__)/], // <-- necessary for Firebase OAuth
  stripPrefix: root,
  root: root + '/',
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: 'cli-universal',
      filename: 'service-worker.js',
      staticFileGlobs: [
        root + '/index.html',
        root + '/**.js',
        root + '/**.css'
      ],
      stripPrefix: root + '/assets/',
      mergeStaticsConfig: true // if you don't set this to true, you won't see any webpack-emitted assets in your serviceworker config,

    })
  ]
};
