import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Gabriel';
  age: number = 33;
  job = 'Aux. Administrativo';
  hobbies = ['Ler', ' Jogar', ' Séries'];
  car = {
    name: "Logan",
    year: 2015,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
