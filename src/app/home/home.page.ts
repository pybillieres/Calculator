import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  display: string;
  operator: string;
  currentTerm: number;
  previousTerm: number;
  result: number;

  constructor() {
    this.display = '0';
    this.operator = '';
    this.currentTerm = 0;
    this.previousTerm = 0;
    this.result = 0;
  }



  //gere l'appui sur les touches
  press(x) {
    console.log(typeof this.currentTerm)
    if (x === 1 || x === 2 || x === 3 || x === 4 || x === 5 || x === 6 || x === 7 || x === 8 || x === 9 || x === 0) {
      if (this.currentTerm != 0) {
        x = +x;
        this.currentTerm = this.currentTerm * 10 + x;
        this.addToDisplay();
      }
      else {
        this.currentTerm = x;
        this.addToDisplay();
      }
    }
    else if (x == 'c') {
      this.display = '0';
      this.operator = '';
      this.currentTerm = 0;
      this.previousTerm = 0;
      this.result = 0;
      this.addToDisplay();
    }
    //ELSE IF AVEC LES OPERATEURS
    //PENSER A REFACTORER ICI, AVEC THIS.OPERATOR = X !!!
    else if (x == '+') {
      this.previousTerm = this.currentTerm;
      this.currentTerm = 0;
      this.operator = '+';
      this.addToDisplay();
    }
    else if (x == '-') {
      this.previousTerm = this.currentTerm;
      this.currentTerm = 0;
      this.operator = '-';
      this.addToDisplay();
    }

    else if (x == 'x') {
      this.previousTerm = this.currentTerm;
      this.currentTerm = 0;
      this.operator = 'x';
      this.addToDisplay();
    }

    else if (x == '/') {
      this.previousTerm = this.currentTerm;
      this.currentTerm = 0;
      this.operator = '/';
      this.addToDisplay();
    }

    else if (x == '=') {
      if (this.operator == '+') {
        this.result = this.previousTerm + this.currentTerm;
        this.currentTerm = this.result;
        this.operator = '';
        this.resultDisplay();
      }
      if (this.operator == '-') {
        this.result = this.previousTerm - this.currentTerm;
        this.currentTerm = this.result;
        this.resultDisplay();
      }
      if (this.operator == 'x') {
        this.result = this.previousTerm * this.currentTerm;
        this.currentTerm = this.result;
        this.resultDisplay();
      }
      if (this.operator == '/') {
        this.result = this.previousTerm / this.currentTerm;
        this.currentTerm = this.result;
        this.resultDisplay();
      }
    }

  }


  addToDisplay() {
    //this.display = this.currentTerm.toString(); 
    if (this.operator == '') {
      this.display = this.currentTerm.toString();
    }
    else if (this.operator !== '' && this.currentTerm !== 0) {
      this.display = this.previousTerm + this.operator + this.currentTerm;
    }
    else if (this.operator !== '' && this.currentTerm == 0) {
      this.display = this.previousTerm + this.operator;
    }

    console.log(this.currentTerm, typeof this.currentTerm, this.previousTerm, typeof this.previousTerm, this.operator, 'result:', this.result);
  }

  resultDisplay() {
    this.display = this.result.toString();
  }

  //ADDITION

  //SOUSTRACTION

  //DIVIDE

  //

  //NEGATICE NUMBERS

  //PERCENTS

}


