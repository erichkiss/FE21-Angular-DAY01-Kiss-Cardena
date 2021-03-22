import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroHeading: String;
  constructor() {
    this.heroHeading = "Welcome to the beautiful world of fish tanks";
   }

  ngOnInit(): void {
  }

}
