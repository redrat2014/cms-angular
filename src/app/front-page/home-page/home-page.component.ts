import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  scroll(el: HTMLElement): void {
    el.scrollIntoView({behavior: 'smooth'});
  }

  fotosToTop(){
    let x = document.querySelector("#section3");
    if (x){
      x.scrollIntoView();
    }
  }

  videosToTop(){
    let y = document.querySelector("#section4");
    if (y){
        y.scrollIntoView();
    }
  }

  agendaToTop(){
    let z = document.querySelector("#section5");
    if (z){
        z.scrollIntoView();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
