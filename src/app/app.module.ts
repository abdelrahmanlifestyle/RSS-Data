import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BackendServiceService } from './service/backend-service.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SingleItemComponent } from './component/single-item/single-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BackendServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
