import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LgPanelComponent } from './components/lg-panel/lg-panel.component';
import { LogoComponent } from './components/logo/logo.component';
import { LanguageComponent } from './components/lg-panel/language/language.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './components/slider/slider.component';
import { ContentComponent } from './components/home-page/content/content.component';
import { ContentListComponent } from './components/home-page/content-list/content-list.component';
import { MapBlockComponent } from './components/home-page/content/contacts/map-block/map-block.component';
import { ContactsComponent } from './components/home-page/content/contacts/contacts.component';
import { NewsComponent } from './components/home-page/content/news/news.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewsPageComponent } from './components/news-page/news-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LgPanelComponent,
    LogoComponent,
    LanguageComponent,
    FooterComponent,
    SliderComponent,
    ContentComponent,
    ContentListComponent,
    MapBlockComponent,
    ContactsComponent,
    NewsComponent,
    HomePageComponent,
    NewsPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
