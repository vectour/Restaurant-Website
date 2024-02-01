import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  toggle:boolean = false;

  toggleMenu() {
    this.toggle =!this.toggle
    console.log(this.toggle)
  }
}
