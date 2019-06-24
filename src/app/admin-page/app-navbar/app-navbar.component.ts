
import { Component, OnInit } from '@angular/core';
import { User } from './../../providers/user';
import { AfService } from './../../providers/af.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  user: User ;
  
  constructor(public afService: AfService) { }

  ngOnInit() {
    this.afService.user$.subscribe(user => this.user = user)
  }

}
