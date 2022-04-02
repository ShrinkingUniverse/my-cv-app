import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResponcibilitiesListComponent } from './responcibilities-list/responcibilities-list.component';
import { ResponsibilityDetailComponent } from './responcibilities-list/responsibility-detail/responsibility-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponcibilitiesListComponent,
    ResponsibilityDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
