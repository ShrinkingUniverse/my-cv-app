import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Responsibility } from './responsibility.model';

@Component({
  selector: 'app-responcibilities-list',
  templateUrl: './responcibilities-list.component.html',
  styleUrls: ['./responcibilities-list.component.css']
})
export class ResponcibilitiesListComponent implements OnInit {
  @Output() companySelected = new EventEmitter<Responsibility>();

  responsibilities: Responsibility[] = [new Responsibility("GDC",
    ["As application support - implement changes and improvements, resolve problems and incidents, raised by customers",
      "Create functional design, which describes all the changes needed to be implemented"],
    ["Entity Framework", "C#", "T-SQL"], "https://icl-services.com/"),

                                        new Responsibility("Arcadia",
    ["Create authentication using access and refresh tokens",
      "Create new endpoint for creating base entity that app is working with"],
    ["ADO.NET", "C#", "API", ".Net Core", "Unit tests"], "https://softwarecountry.com/")
  ];

  get count(): number {
    return this.responsibilities.length
  }

  constructor() { }

  onSelected(responsibility: Responsibility) {
    this.companySelected.emit(responsibility);
  }
 
  ngOnInit(): void {
  }

}
