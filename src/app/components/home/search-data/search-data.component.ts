
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyDataService } from 'src/app/services/my-data.service';
import { query } from '@angular/animations';

// import { Router } from '@angular/router';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css']
})

export class SearchDataComponent {

  pageNo:any;
  loading:boolean = false;
  show:boolean = false;
  displayTrendingSubjects:boolean =true;
  searchedBooks: any = [];
  searchQuery: string = '';
  query:String='';

  @Output() updateDataEvent = new EventEmitter<any>()
  @Output() loadingEvent = new EventEmitter<any>()
  @Output() searchedData = new EventEmitter<any>()
  @Output() showPropertyData = new EventEmitter<any>()
  constructor(private http: HttpClient,
    

    ) { }

   
  searchBooks() {
    this.loadingEvent.emit(
      this.loading = true,
       );
       
       this.updateDataEvent.emit(
        this.displayTrendingSubjects = false,
         );
    console.log('searchQuery is ' + this.searchQuery)
    // this.query = this.searchQuery;
    // this.searchQuery = this.searchQuery.replace(/ /g, '_');
    const url = `http://openlibrary.org/search.json?q=${(this.searchQuery)}/`;
    this.http.get(url).subscribe((response: any) => {
      this.searchedBooks = response.docs;
      console.log(this.searchedBooks);

      this.searchedData.emit(this.searchedBooks);
      this.showPropertyData.emit(this.show = true);
      
        this.loadingEvent.emit(
          this.loading = false,
           );
    
    });
  }
  showProperties(){
    this.updateDataEvent.emit(
      this.displayTrendingSubjects = true,
      )
     this.showPropertyData.emit(
      this.show = false
      )
  }
  inputQuery(data:any){
    console.log('change query '+data)
    data.length === 0?(this.showProperties()):this.displayTrendingSubjects = false;
  }
 
}