import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
 
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { MessagesComponent }    from './messages/messages.component';
 
import { AppRoutingModule }     from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { Logger } from './logger.service';
import { HeroComponent } from './hero/hero.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { KeyUpComponent } from './keyup/keyup.component';
import { LoopbackComponent } from './loop-back/loop-back.component';
import { LittleTourComponent } from './little-tour/little-tour.component';



@NgModule({
  imports: [
    
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    HeroComponent,
    ClickMeComponent,
    KeyUpComponent,
    LoopbackComponent,
    LittleTourComponent
  ],
  providers:[
    Logger
  ],
  bootstrap: [ AppComponent ]
  
})
export class AppModule { }