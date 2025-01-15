import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'app-test',
  imports: [FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{

  public stringInterpolation = 'Este é um teste';

  public isDisabled = false;

  public myBindingProperty: string = '';

  constructor() {}

  ngOnInit(): void {}

  public disabledButton(){
    if(this.isDisabled) this.isDisabled = false;
    else this.isDisabled = true;
  }

}
