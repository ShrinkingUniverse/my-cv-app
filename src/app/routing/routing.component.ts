import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ContactsComponent } from '../contacts/contacts.component';
import { HomeComponent } from '../home/home.component';
import { ResponsibilitiesComponent } from "../responsibilities/responsibilities.component";
import { NotFoundComponent } from '../shared/not-found/not-found.component';


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
  { path: "", component: HomeComponent },
  { path: "responsibilities", component: ResponsibilitiesComponent },
  { path: "contacts", component: ContactsComponent},
  { path: "**", component: NotFoundComponent }
]

export const routing = RouterModule.forRoot(routes)


