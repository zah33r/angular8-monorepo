import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MicroApp1Module } from './app/microapp1.module';
import { environment } from './environments/environment.microapp1';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MicroApp1Module)
  .catch(err => console.error(err));
