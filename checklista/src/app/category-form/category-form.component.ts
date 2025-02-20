import { Component, OnInit } from '@angular/core';
// import { MatCardModule } from '@angular/material/card'
// import { MatButtonModule } from '@angular/material/button';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';

import { MaterialModule } from "../material.model";
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-category-form',
  imports: [MaterialModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent implements OnInit {

  public actionName = 'Editar'
  public categoryForm: FormGroup;


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
  }

  public save(){
    console.log('salvar clicado');
    
  }

}
