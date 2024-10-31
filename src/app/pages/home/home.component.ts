import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { MenuBarComponent } from "../../components/menu-component/menu.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleComponent,SmallCardComponent,MenuBarComponent,BigCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
