import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { DemoSignalComponent } from './demo-signal/demo-signal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  { 
    path: 'demo',
    component: DemoComponent,
    title: 'Demo' 
  },
  { 
    path: 'demo-form', 
    component: DemoFormComponent,
    title: 'Demo Form' 
  },
  { 
    path: 'demo-signal', 
    component: DemoSignalComponent,
    title: 'Demo Signal' 
  },
  { 
    path: '**', 
    component: PageNotFoundComponent,
    title: 'Error page' 
  }
];
