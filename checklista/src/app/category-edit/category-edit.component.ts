import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Category } from '../_models/category';
import { CategoryFormComponent } from "../category-form/category-form.component";

@Component({
  selector: 'app-category-edit',
  imports: [CategoryFormComponent],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent implements OnInit{

  public editableCategory!: Category ;
  public actionName: string = 'Editar';

  constructor(private dialogueRef: MatDialogRef<CategoryEditComponent>, @Inject(MAT_DIALOG_DATA) dialogData: any){

    if(dialogData.editableCategory != null){
      this.editableCategory = dialogData.editableCategory;
    }

    if(dialogData.actionName != null){

    }

  }

  ngOnInit(): void {
    
  }

  public closeModalWindow($event: any){
    if($event) this.dialogueRef.close();
  }

}
