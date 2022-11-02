import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { RandomPhotoComponent } from './random-photo/random-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomPhotoComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
