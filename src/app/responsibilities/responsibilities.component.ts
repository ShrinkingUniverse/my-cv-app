import { Component, OnInit } from '@angular/core';
import { Responsibility } from '../responcibilities-list/responsibility.model';

@Component({
  selector: 'app-responsibilities',
  templateUrl: './responsibilities.component.html',
  styleUrls: ['./responsibilities.component.css']
})
export class ResponsibilitiesComponent implements OnInit {
  selectedCompany: Responsibility
  constructor() { }

  ngOnInit(): void {
  }

}
