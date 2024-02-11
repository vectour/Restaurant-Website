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
    // Calculate the height scrolled
    const scrollPosition = window.screenY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // Height to show blur header
    const scrollHeight = 50

    this.isScrolled = scrollPosition >scrollHeight
    // this.isScrolled = true
  }
}
