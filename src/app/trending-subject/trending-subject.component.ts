import { Component } from '@angular/core';

@Component({
  selector: 'app-trending-subject',
  templateUrl: './trending-subject.component.html',
  styleUrls: ['./trending-subject.component.css']
})
export class TrendingSubjectComponent {
  
  name:string='';
  title  = 'Trending Subjects';
  subjects = ['Education','Philosophy','Science','Finance','Childhood and youth','Social life and customs','Politics and government']
  constructor(
   
  ){}

  goToSubjects(title: string) {
    // replace ' ' with '+' in title
    title = title.replace(/ /g, '_');
    // this.router.navigate(['/subjects', title]);
  }
  showSubects = null;
  display(searchResult:any){
      this.showSubects = searchResult
  }
}


