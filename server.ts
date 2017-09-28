import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const port = process.env.PORT || 3000;
const distFolder = join(process.cwd(), 'dist');

// Our index.html we'll use as our template
const template = readFileSync(join(distFolder, 'browser', 'index.html')).toString();

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(distFolder, 'browser'));

// Server static files from /browser
app.get('*.*', express.static(join(distFolder, 'browser'), {
  maxAge: '1y'
}));

// ALl regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(port, () => {
  console.log(`Node Express server listening on http://localhost:${port}`);
});
