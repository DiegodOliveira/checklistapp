import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'app-test',
  imports: [FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{

  // public stringInterpolation = 'Este é um teste';

  // public isDisabled = false;

  // public myBindingProperty: string = '';

  constructor() {}

  ngOnInit(): void {}

  // public disabledButton(){
  //   if(this.isDisabled) this.isDisabled = false;
  //   else this.isDisabled = true;
  // }

  public showTitle = true;

  public changeTitleDisplayStatus(){
    if(this.showTitle) this.showTitle = false;
    else this.showTitle = true;
  }

  public items = [
    { description:  "item 1", id: 1},
    { description:  "item 2", id: 2},
    { description:  "item 3", id: 3},
    { description:  "item 4", id: 4}
  ];

}
