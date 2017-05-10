import { Component, OnInit } from '@angular/core';
import { TakeService } from "./take.service";

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor() { }

  ngOnInit() { }
}
