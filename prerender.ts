import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {enableProdMode} from '@angular/core';
// angular render engine
import { renderModuleFactory } from '@angular/platform-server';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

import {join} from 'path';
import {readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';

const staticRoutes = [
    "/",
    "/home",
    "/contact"
];

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();


const DIST_FOLDER = join(process.cwd(), 'dist/static');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

const index = readFileSync(join(DIST_FOLDER, 'index.html'), 'utf8');

const renderRoute = (route: string) => {
    const folderPath:string = join(DIST_FOLDER, route);
    if(!existsSync(folderPath)) mkdirSync(folderPath);

    renderModuleFactory(AppServerModuleNgFactory, {
        document: index,
        url: route,
        extraProviders: [provideModuleMap(LAZY_MODULE_MAP)]
    }).then( html => writeFileSync(
        join(folderPath, 'index.html'), 
        html
    ));
};

staticRoutes.forEach(route => renderRoute(route));