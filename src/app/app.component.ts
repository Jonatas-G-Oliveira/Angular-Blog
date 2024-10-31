import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent}   from "./components/menu-component/menu.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
