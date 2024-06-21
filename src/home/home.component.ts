import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToSection(section: string): void {
    this.scrollService.scrollToElement(section);
  }
}
