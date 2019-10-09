import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent{
  /* Atributos de clase */
  sumar:boolean;
  restar:boolean;
  multiplicar:boolean;
  dividir:boolean;
  resultado:string;
  a:number;
  b:number;
  res:number;

  constructor() {
    this.resultado = "";
    this.a = 0;
    this.b = 0;
  }

  /* Obtiene el número escrito en el campo A */
  onGuardarA(event:Event){
    this.a = Number((<HTMLInputElement>event.target).value);
    if(this.a === undefined){
      this.a = 0;
    }
    else{
      this.sumar = true;
      this.restar = true;
      this.dividir = true;
      this.multiplicar = true;
    }
  }

  /* Obtiene el número escrito en el campo B */
  onGuardarB(event:Event){
    this.b = Number((<HTMLInputElement>event.target).value);

    if(this.b === undefined){
      this.b = 0;
    }
    else{
      this.sumar = true;
      this.restar = true;
      this.dividir = true;
      this.multiplicar = true;
    }    
  }

  /* Conjunto de operaciones que se pueden hacer teniendo dos números */
  onSumar(){
    this.res = this.a + this.b;
    this.resultado = "El resultado es " + this.res;
  }

  onRestar(){
    this.res = this.a - this.b;
    this.resultado = "El resultado es " + this.res;
  }

  onMultiplicar(){
    this.res = this.a * this.b;
    this.resultado = "El resultado es " + this.res;
  }

  onDividir(){
    if(this.b == 0){
      this.resultado = "¡No puedes dividir por cero!";
    }
    else{
      this.res = this.a / this.b;
      this.resultado = "El resultado es " + this.res;
    }
  }
}
