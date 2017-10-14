// Load zone.js for the server.
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { chdir } from 'process';

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import { renderModuleFactory } from '@angular/platform-server';

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

// Get route paths to prerender only static pages
const paths = require('./routes');

const clientFolder = join(process.cwd(), 'client');

// Load the index.html file containing referances to your application bundle.
const index = readFileSync(join('client', 'index.html'), 'utf8');

// Iterate each route path
paths.forEach((route) => {
  // Changes current directory to ./dist/client
  chdir(clientFolder);

  // Creates new directories (if not exists) and changes current directory for the nested one
  route.split('/').filter(val => val !== '')
    .forEach((dir) => !existsSync(dir) ? mkdirSync(dir) : chdir(dir));

  // Writes rendered HTML to index.html, replacing the file if it already exists.
  renderModuleFactory(AppServerModuleNgFactory, {
    document: index,
    url: route,
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }).then(html => writeFileSync(join(clientFolder, route, 'index.html'), html));
});
