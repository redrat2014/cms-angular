
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenusService, Menu } from './../../service/menus/menus.service';
import { PostsService } from './../../service/posts/posts.service';
import { User } from './../../providers/user';
import { AfService } from './../../providers/af.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  menu: any;
  postsList: any;
  user: User ;

  constructor(private route: ActivatedRoute, private menus: MenusService, private posts: PostsService, public afService: AfService) { 
    this.route.params.subscribe( params => {
      console.log(params);
      this.menus.getConditionalMenus('url', '==', params.url).subscribe( menus => {
        console.log(menus);
        if(menus.length > 0) {
          this.menu = menus[0];
          this.posts.getConditionalPosts('menu_id', '==', this.menu.id).subscribe( posts => {
            console.log(posts);
            this.postsList = posts;
          })
        }  
      })
    })
  }

  ngOnInit() {
    this.afService.user$.subscribe(user => this.user = user)
  }

}
