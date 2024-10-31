import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})

export class BigCardComponent {
  @Input()
  thumbnail:string = "";
  @Input()
  card_title:string = "";
  @Input()
  card_description:string = "";
  @Input()
  Id:string = "0";

}
