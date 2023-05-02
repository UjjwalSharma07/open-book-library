import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyDataService } from '../services/my-data.service';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subject: string = '';
  subjects: any[] = [];
  pageNo:any;
  show:boolean = false;
  isLoading = false;
  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private mydataService: MyDataService
  ) {}
  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      console.log('subject params is '+ params['title'])
      this.subject = params['title'];
      console.log('subject is '+ this.subject)
      const startYear = 1500;
      const endYear = 1600;
      this.mydataService.getWorksSubject((this.subject).toLocaleLowerCase(), startYear, endYear)
        .subscribe(data => {
          this.subjects = data?.works|| [];
          this.show = true;
          this.isLoading = false;
          console.log(data)
          console.log(this.subjects)
        });
    });   
  }
  goToHomePage(){
    this.router.navigate(['/']);
  }
}