import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente01',
  templateUrl: './componente01.component.html',
  styleUrls: ['./componente01.component.css']
})
export class Componente01Component implements OnInit {

  marca: string = "Lamborghini"
  modello: string = "Aventator"

  constructor() { }

  ngOnInit(): void {
  }

}
