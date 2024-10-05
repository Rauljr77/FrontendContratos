import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { DemoSignalComponent } from './demo-signal/demo-signal.component';

export const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'demo-form', component: DemoFormComponent },
  { path: 'demo-signal', component: DemoSignalComponent },
  { path: '**', component: DemoSignalComponent }
];
