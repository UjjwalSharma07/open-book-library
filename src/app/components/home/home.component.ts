import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showSubects:boolean = true;
  subject: string = '';
  works: any[] = [];
  name:string='';
  loading:boolean =false;
  showPaginationbar:boolean=false;
  pageNo:any;

  title  = 'Trending Subjects';
  subjects = ['Education','Philosophy','Science','Finance','Methodology','Social life and customs','Politics and government']
  constructor(
    private router: Router,
  ){}
 
  goToSubjects(title: string) {
    // replace ' ' with '+' in title
    title = title.replace(/ /g, '_');
    this.router.navigate(['/subjects', title]);
  }

  handleUpdateData(data: any) {
    console.log('handleUpdateData() called');
    this.showSubects = data;
  }

  handleLoading(loading:any){
    console.log('handleLoading function called ' + loading);
    this.loading = loading;
  }
  handleSearchData(data:any){
    console.log('handleSearchData function called ' );
    this.works = data;
  }
  handleShowProperty(show:any){
    console.log('handleSearchData function called ' + show);
    this.showPaginationbar = show;
  }
  reloadPage(){
    window.location.reload();
  }
}
