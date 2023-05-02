import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loading:boolean=true;
  handleLoading(loading:any){
    console.log('loading function called');
    this.loading = loading;
  }
  // handleUpdateData(data: any) {
  //   console.log('handleUpdateData() called');
  //   console.log('search data: ' + data);
  //   this.showSubects = data;
  //   console.log('show subjects: ' + this.showSubects);
  //   this.changeDetector.detectChanges();
  // }
}
