import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorchangeDirective } from './colorchange.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorchangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
