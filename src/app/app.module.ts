import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './pages/welcomepage/welcomepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';
import { RealityComponent } from './components/reality/reality.component';
import { DoComponent } from './components/do/do.component';
import { ContentComponent } from './components/content/content.component';
import { CardsComponent } from './components/cards/cards.component';
import { SignComponent } from './components/sign/sign.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    FooterComponent,
    SignComponent,
    CardsComponent,
    ContentComponent,
    DoComponent,
    RealityComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    LayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
