import { Component } from '@angular/core';
import { Responsibility } from './responcibilities-list/responsibility.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grigoryeva Tatiana';
  responsibilities: Responsibility[] = [new Responsibility("GDC",
    ["As application support - implement changes and improvements, resolve problems and incidents, raised by customers",
      "Create functional design, which describes all the changes needed to be implemented"],
    ["Entity Framework", "C#", "T-SQL"]  ),
  new Responsibility("Arcadia",
    ["Create authentication using access and refresh tokens",
      "Create new endpoint for creating base entity that app is working with"],
    ["ADO.NET", "C#", "API", ".Net Core", "Unit tests"]  )
  ];
  get count(): number {
    return this.responsibilities.length
  }
 }