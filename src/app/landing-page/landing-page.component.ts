import { Component, HostListener } from '@angular/core';

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

  isScrolled: boolean = false;

  @HostListener('window: scroll', ['$event'])
  onScroll(event: any) {
    this.isScrolled = true
  }
}
