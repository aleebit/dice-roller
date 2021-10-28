import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-die-roller',
  templateUrl: './die-roller.component.html',
  styleUrls: ['./die-roller.component.css']
})
export class DieRollerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input("side-count")
  sideCount = "6";

  rollValue = 6;

  roll = () => {
    this.rollValue = Math.floor(Math.random() * Number(this.sideCount)) + 1;

  };

}
