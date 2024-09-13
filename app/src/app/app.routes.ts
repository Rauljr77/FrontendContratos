import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DemoSignalComponent } from './demo-signal/demo-signal.component';

export const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'demo-signal', component: DemoSignalComponent },
  { path: '**', component: DemoSignalComponent }
];
