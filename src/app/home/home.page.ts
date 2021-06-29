import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  float: Boolean; //isComa or not
  isResult: Boolean;


  constructor() {
    this.display = '0';
    this.operator = '';
    this.currentTerm = 0;
    this.previousTerm = 0;
    this.result = 0;
    this.float = false;
    this.isResult = false;
  }



  //gere l'appui sur les touches
  press(x) {
    console.log(typeof this.currentTerm)
    if (x === 1 || x === 2 || x === 3 || x === 4 || x === 5 || x === 6 || x === 7 || x === 8 || x === 9 || x === 0) {
      if (this.isResult === false) {
        if (this.float === true) {
          if (Math.floor(this.currentTerm) == this.currentTerm) {
            this.currentTerm = Number(this.currentTerm.toString() + '.' + x);
            this.addToDisplay();
          }
          else {
            this.currentTerm = Number(this.currentTerm.toString() + x);
            this.addToDisplay();
          }

        }
        else if (this.currentTerm !== 0) {
          x = +x;
          this.currentTerm = this.currentTerm * 10 + x;
          this.addToDisplay();
        }
        else {
          this.currentTerm = x;
          this.addToDisplay();
        }
      }
      else if (this.isResult === true) {
        this.isResult = false;
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
      this.float = false;
      this.addToDisplay();
    }

    else if (x == 'ce') { //GERER LE CAS DES DECIMALE LORSQUON ARRIVE AU 10e
      this.currentTerm = Math.floor(this.currentTerm / 10);
      this.addToDisplay();
    }

    else if (x == '+/-') {
      this.currentTerm = - this.currentTerm;
      this.addToDisplay();
    }

    else if (x == ',') {
      if (this.float === false) {
        this.float = true;
        this.display = this.currentTerm.toString() + '.'; //INTEGRER CETTE PARTIE DANS LA FONCTION QUI GERE L'AFFICHAGE
      }
    }

    //ELSE IF AVEC LES OPERATEURS
    //PENSER A REFACTORER ICI, AVEC THIS.OPERATOR = X !!!
    else if (x == '+' ||x == '-'||x == 'x'||x == '/') {
      this.previousTerm = this.currentTerm;
      this.currentTerm = 0;
      this.operator = x;
      this.float = false;
      this.addToDisplay();
    }

    else if (x == '=') {
      this.isResult = true;
      switch (this.operator) {
        case '+': this.result = this.previousTerm + this.currentTerm;
          break;
        case '-': this.result = this.previousTerm - this.currentTerm;
          break;
        case 'x': this.result = this.previousTerm * this.currentTerm;
          break;
        case '/': this.result = this.previousTerm / this.currentTerm;
          break;
      }
      this.currentTerm = this.result;
      this.operator = '';
      this.float = false;
      this.resultDisplay();
    }
  }

  addToDisplay() {
    if (this.operator == '') {
      this.display = this.currentTerm.toString();
    }
    else if (this.operator !== '' && this.currentTerm !== 0) {
      this.display = this.previousTerm + ' ' + this.operator + ' ' + this.currentTerm;
    }
    else if (this.operator !== '' && this.currentTerm == 0) {
      this.display = this.previousTerm + ' ' + this.operator;
    }

    console.log(this.currentTerm, typeof this.currentTerm, this.previousTerm, typeof this.previousTerm, this.operator, 'result:', this.result);
  }

  resultDisplay() {
    this.display = this.result.toString();
  }


  //ECRIRE EN PUISSANVE LORSQUE LE NOMBRE DEVIENT TROP GRAND

}


