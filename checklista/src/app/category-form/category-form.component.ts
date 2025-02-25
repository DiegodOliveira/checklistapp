import { Component, OnInit, Input, Output, EventEmitter, ViewChild  } from '@angular/core';
import { MaterialModule } from "../material.model";
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Category } from '../_models/category';


@Component({
  selector: 'app-category-form',
  imports: [MaterialModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent implements OnInit {


  @Input() public actionName='Editar';

  public categoryForm!: FormGroup;

  @Output() closeModelEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  @Input() public editableCategory!: Category;

  @ViewChild('categoryFormDirective') public categoryFormDirective!: FormGroupDirective;

  public isFormReady = false;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    
    this.categoryForm = this.formBuilder.group({
      name: [this.editableCategory != null ? this.editableCategory.name : '', Validators.required]
    });
    this.isFormReady = true;
  }

  public cancel(){
    console.log('Cancelar clicado');
    this.closeModelEventEmitter.emit(true);
  }

  public save(){
    console.log('salvar clicado');
    this.closeModelEventEmitter.emit(true);
    
  }

}
