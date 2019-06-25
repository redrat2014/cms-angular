
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from './../material';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  links = [
    {
      name: 'Menus',
      link: 'menus',
      icon: 'menu'
    },
    {
      name: 'Posts',
      link: 'posts',
      icon: 'mail_outline'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
