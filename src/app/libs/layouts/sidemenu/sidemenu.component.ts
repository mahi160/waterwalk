import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'ww-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  standalone: true,
  imports: [IonicModule,RouterOutlet],
})
export class SidemenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
