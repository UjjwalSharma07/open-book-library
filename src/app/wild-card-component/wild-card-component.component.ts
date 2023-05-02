import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wild-card-component',
  templateUrl: './wild-card-component.component.html',
  styleUrls: ['./wild-card-component.component.css']
})
export class WildCardComponentComponent {
  constructor(
    private router:Router
  ){}
  goToHomePage(){
    this.router.navigate(['/']);
  }
}
