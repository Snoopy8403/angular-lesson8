import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./core/menu/menu.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
