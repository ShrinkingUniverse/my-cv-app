import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ResponsibilitiesComponent } from "../responsibilities/responsibilities.component";


@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  
  title = 'Grigoryeva Tatiana';

  constructor() { }

  ngOnInit(): void {
  }

}
const routes: Routes = [
  { path: "responsibilities", component: ResponsibilitiesComponent },
  { path: "**", redirectTo: "/responsibilities" }
]

export const routing = RouterModule.forRoot(routes)


