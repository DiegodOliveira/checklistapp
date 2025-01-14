import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  public stringInterpolation = 'Este é um teste';

  public isDisabled = false;

  public disabledButton(){
    if(this.isDisabled) this.isDisabled = false;
    else this.isDisabled = true;
  }

}
