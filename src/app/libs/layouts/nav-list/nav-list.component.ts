import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'ww-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
  standalone: true,
  imports: [IonicModule, NgFor],
})
export class NavListComponent implements OnInit {
  navItems = [
    { name: 'Home', icon: 'home-outline', path: '/' },
    { name: 'Asset Accounts', icon: 'wallet-outline', path: '/' },
    { name: 'Transactions', icon: 'cart-outline', path: '/' },
    { name: 'Categories', icon: 'cart-outline', path: '/' },
  ];
  constructor() {}

  ngOnInit() {}
}
