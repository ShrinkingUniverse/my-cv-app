import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResponcibilitiesListComponent } from './responcibilities-list/responcibilities-list.component';
import { ResponsibilityDetailComponent } from './responcibilities-list/responsibility-detail/responsibility-detail.component';
import { ResponsibilitiesComponent } from './responsibilities/responsibilities.component';
import { RespocsibilityDescriptionComponent } from './responcibilities-list/respocsibility-description/respocsibility-description.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponcibilitiesListComponent,
    ResponsibilityDetailComponent,
    ResponsibilitiesComponent,
    RespocsibilityDescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
