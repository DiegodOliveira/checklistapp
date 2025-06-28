import { Component, OnInit, Input, Output, EventEmitter, ViewChild  } from '@angular/core';
import { MaterialModule } from "../material.model";
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Category } from '../_models/category';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../services/category.service';
import { SnackBarService } from '../services/snack-bar.service';




@Component({
  selector: 'app-category-form',
  imports: [MaterialModule, FormsModule,
    ReactiveFormsModule, CommonModule],
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

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private snackbarService: SnackBarService){

  }

  ngOnInit(): void {
    
    this.categoryForm = this.formBuilder.group({
      name: [this.editableCategory != null ? this.editableCategory.name : '', Validators.required]
    });
    this.isFormReady = true;
  }

  public cancel(){
    this.closeModelEventEmitter.emit(true);
  }

  public save(){

    
    this.clearForm();

    this.closeModelEventEmitter.emit(true);


    if(this.categoryForm.valid){

      if(this.actionName == 'Editar'){

          this.categoryService.updateCategory(this.categoryForm.value).subscribe((resp: any) => {
            this.closeModelEventEmitter.emit(true);
          }, (err: any) => {
            this.snackbarService.showSnackBar('Não foi possível atualizar a categoria, tente novamente','OK ')
          });

      } else {

          this.categoryService.saveCategory(this.categoryForm.value).subscribe((resp: any) => {
            this.closeModelEventEmitter.emit(true);
            }, (err: any) => {
              this.snackbarService.showSnackBar('Não foi possível atualizar uma categoria, tente novamente','OK ')
            });

      }


      

    }
  }

  public clearForm(){
    this.categoryForm.reset();
    this.categoryFormDirective.resetForm();
  }

}
