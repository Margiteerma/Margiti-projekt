import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { TootedComponent } from './tooted/tooted.component';
import { MeeskondComponent } from './meeskond/meeskond.component';
import { PoedComponent } from './poed/poed.component';

@NgModule({
  declarations: [
    AppComponent,
    TootedComponent,
    MeeskondComponent,
    PoedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
