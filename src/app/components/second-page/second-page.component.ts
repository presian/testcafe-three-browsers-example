import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openThirdPageInNewWindow() {
    window.open('http://localhost:4200/third-page', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
  }
}
