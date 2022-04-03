import { Component, Input, OnInit } from '@angular/core';
import { Responsibility } from '../responsibility.model';

@Component({
  selector: 'app-respocsibility-description',
  templateUrl: './respocsibility-description.component.html',
  styleUrls: ['./respocsibility-description.component.css']
})
export class RespocsibilityDescriptionComponent implements OnInit {
  @Input() responsibilities: Responsibility
  @Input() company: Responsibility;

  constructor() { }

  ngOnInit(): void {
  }

}
