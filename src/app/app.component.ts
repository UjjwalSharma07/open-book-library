import { Component, OnInit } from '@angular/core';
import { MyDataService } from './services/my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'book-library';
  
  constructor(private dataService : MyDataService){}

  ngOnInit(){
    this.getData();
  }

  page:any;
  data:any=[];

  getData() {
    this.dataService.getWorksSubject().subscribe(
      (data) => {
        this.data = data;
        console.log(this.data)
      }
    );
  }
}
