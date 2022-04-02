import { Component, Input, OnInit } from '@angular/core';
import { Responsibility } from '../responsibility.model';

@Component({
  selector: 'app-responsibility-detail',
  templateUrl: './responsibility-detail.component.html',
  styleUrls: ['./responsibility-detail.component.css']
})
export class ResponsibilityDetailComponent implements OnInit {
  @Input() responsibilities: Responsibility;
  constructor() {}

  ngOnInit(): void {
  }

}

