import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { MatCardModule } from '@angular/material/card'
// import { MatButtonModule } from '@angular/material/button';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';

import { MaterialModule } from "../material.model";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../_models/category';


@Component({
  selector: 'app-category-form',
  imports: [MaterialModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent implements OnInit {


  @Input() public actionName="Editar";

  @Input() public editableCategory!: Category;

  public categoryForm: FormGroup;

  @Output() closeModelEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder){

    this.categoryForm = this.formBuilder.group({
      name: 'Diego',
      age: '21',
      profession: 'Programador'
    });

  }

  ngOnInit(): void {
    
  }

  public cancel(){
    console.log('Cancelar clicado');
    this.closeModelEventEmitter.emit(false);
  }

  public save(){
    console.log('salvar clicado');
    this.closeModelEventEmitter.emit(true);
    
  }

}
