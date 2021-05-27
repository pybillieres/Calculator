import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  display: string = '0';

  press(x) {
    if( x==1 || x==2 || x==3 || x==4 || x==5 || x==6 || x==7 || x==8 || x==9 || x==0){
      console.log(x, "nbr");
      if(this.display !== '0'){
        var displayNumber: number = +this.display;
        displayNumber = displayNumber + x;
        this.display = displayNumber.toString();
      }
      else{
        var displayNumber: number = x;
        this.display = displayNumber.toString();
      }
    }
    else if(x='c'){
      this.display = '0';
    }

  }

}
