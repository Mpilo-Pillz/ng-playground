import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomUserComponent } from './random-user/random-user.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { CustomTabsComponent } from './components/custom-tabs/custom-tabs.component';
import { CustomTabComponent } from './components/custom-tab/custom-tab.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridDojoModule } from './ag-grid-dojo/ag-grid-dojo.module';



@NgModule({
  declarations: [
    AppComponent,
    RandomUserComponent,
    CustomCardComponent,
    CustomTabsComponent,
    CustomTabComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, AgGridDojoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
