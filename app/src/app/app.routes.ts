import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { DemoSignalComponent } from './demo-signal/demo-signal.component';

export const routes: Routes = [
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
    component: DemoSignalComponent,
    title: 'Error page' 
  }
];
