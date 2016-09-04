import './polyfill';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';


document.addEventListener('DOMContentLoaded', function() {
  platformBrowserDynamic().bootstrapModule(AppModule);
});
