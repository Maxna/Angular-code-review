import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  } from './sample/sample.component';

const appRoutes: Routes = [
  {
  path: '',
  component: SampleComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
