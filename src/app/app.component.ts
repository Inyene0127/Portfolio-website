import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'portfolio';

  // showScrollTopButton: boolean = false;

  // onShowScrollTopButtonChange(show: boolean) {
  //   this.showScrollTopButton = show;
  // }

  ngOnInit(): void {}

}
