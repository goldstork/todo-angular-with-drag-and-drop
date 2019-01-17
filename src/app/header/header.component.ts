import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: Array<Object> = [
    {
      name: 'Home',
      link: ''
    },
    {
      name: 'Todo',
      link: 'todo'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
