import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { InplaceModule } from 'primeng/inplace';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InplaceModule, MenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'app';
  items: MenuItem[] = [];
  
  router = inject(Router);
  
  ngOnInit(): void {
    this.loadMenuItems();
  }

  loadMenuItems() {
    this.router.config.forEach(e => {
      this.items.push({
        label: e?.title?.toString(),
        routerLink: [`${e.path}`]
      });
    });
  }
}
