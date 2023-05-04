import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  constructor(private http: HttpClient) { }

  getWorksSubject(subject:string='love' , startYear: number = 0, endYear: number = 0):
  Observable<any> {
  const url =
  `https://openlibrary.org/subjects/${subject}.json?published_in=${startYear}-${endYear}`;
      return this.http.get<any>(url) ;
  }
  
}
