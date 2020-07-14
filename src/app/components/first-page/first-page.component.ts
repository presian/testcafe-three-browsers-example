import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openSecondPageInNewWindow() {
    // here is the problem. Initially the new window doesn't have an url. And almost immediately the url is changed.
    const secondPageWindow = window.open('', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
    secondPageWindow.location.href = 'http://localhost:4200/second-page';
  }
}
