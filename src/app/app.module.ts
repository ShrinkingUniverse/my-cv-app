import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResponcibilitiesListComponent } from './responcibilities-list/responcibilities-list.component';
import { ResponsibilityDetailComponent } from './responcibilities-list/responsibility-detail/responsibility-detail.component';
import { ResponsibilitiesComponent } from './responsibilities/responsibilities.component';
import { RespocsibilityDescriptionComponent } from './responcibilities-list/respocsibility-description/respocsibility-description.component';
import { routing, RoutingComponent } from './routing/routing.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from './shared/material/material.module';
import { MaterialComponent } from './shared/material/material.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    ResponcibilitiesListComponent,
    ResponsibilityDetailComponent,
    ResponsibilitiesComponent,
    RespocsibilityDescriptionComponent,
    RoutingComponent,
    NotFoundComponent,
    HomeComponent,
    ContactsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    ToolbarModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
