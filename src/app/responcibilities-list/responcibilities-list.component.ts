import { Component, OnInit } from '@angular/core';
import { ResponsibilityDetailComponent } from './responsibility-detail/responsibility-detail.component';
import { Responsibility } from './responsibility.model';

@Component({
  selector: 'app-responcibilities-list',
  templateUrl: './responcibilities-list.component.html',
  styleUrls: ['./responcibilities-list.component.css']
})
export class ResponcibilitiesListComponent implements OnInit {

  constructor() { }
 
 
  ngOnInit(): void {
  }

}
