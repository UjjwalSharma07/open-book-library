import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { SubjectComponent } from './subject/subject.component';
import { HeaderComponent } from './header/header.component';
import { SearchDataComponent } from './components/home/search-data/search-data.component';
import { TrendingSubjectComponent } from './trending-subject/trending-subject.component';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination'
import { NgxSpinnerModule } from 'ngx-spinner';
import { WildCardComponentComponent } from './wild-card-component/wild-card-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubjectComponent,
    HeaderComponent,
    SearchDataComponent,
    TrendingSubjectComponent,
    WildCardComponentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
