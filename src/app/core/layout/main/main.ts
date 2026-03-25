import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Sidebar} from '@core/layout/sidebar/sidebar';
import {Menubar} from '@core/layout/menubar/menubar';

@Component({
  selector: 'app-main',
  imports: [
    RouterOutlet,
    Sidebar,
    Menubar
  ],
  templateUrl: './main.html',
})
export class Main {
}
