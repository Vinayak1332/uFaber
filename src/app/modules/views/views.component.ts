import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {

  openView = ['view1','view2','view3'];

  constructor() { }

  ngOnInit(): void {
  }

  open(){
  }

}
