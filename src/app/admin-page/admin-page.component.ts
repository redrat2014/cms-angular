
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from './../material';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  links = [
    // {
    //   name: 'Menus',
    //   link: 'menus',
    //   icon: 'menu'
    // },
    // {
    //   name: 'Posts',
    //   link: 'posts',
    //   icon: 'mail_outline'
    // }
    {
      name: 'Biografia',
      link: 'biografia',
      icon: 'account_circle'
    },
    {
      name: 'Repertório',
      link: 'repertorio',
      icon: 'library_music'
    },
    {
      name: 'Projetos',
      link: 'projetos',
      icon: 'business_center'
    },
    {
      name: 'Agenda',
      link: 'agenda',
      icon: 'event_note'
    },
    {
      name: 'Fotos',
      link: 'fotos',
      icon: 'photo_library'
    },
    {
      name: 'Videos',
      link: 'videos',
      icon: 'ondemand_video'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
