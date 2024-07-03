import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  activeSection: string = 'home';
//  @Output() showScrollTopButton: EventEmitter<boolean> = new EventEmitter<boolean>();
 


  constructor(private scrollService: ScrollService) {}
  ngOnInit(): void {}
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'about', 'education', 'skills', 'projects', 'certificates', 'contact'];
    let currentSection = 'home';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element && this.isElementInViewport(element)) {
        currentSection = section;
      }
    }
    this.activeSection = currentSection;
  }

  isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }


  scrollToSection(section: string): void {
    this.scrollService.scrollToElement(section);
    this.activeSection = section;
    // this.showScrollTopButton.emit(true); 
 }
}
