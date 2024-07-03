import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  // @Input() showScrollTopButton: boolean = false;

  // scrollToTop(): void {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }
  ngOnInit(): void {}
}
