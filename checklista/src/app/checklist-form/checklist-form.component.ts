import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MaterialModule } from '../material.model';
import { ChecklistItem } from '../_models/checklist_item';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Category } from '../_models/category';
import { CategoryService } from '../services/category.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SnackBarService } from '../services/snack-bar.service';
import { ChecklistService } from '../services/checklist.service';


@Component({
  selector: 'app-checklist-form',
  imports: [MaterialModule, FormsModule,
    ReactiveFormsModule, CommonModule ],
  templateUrl: './checklist-form.component.html',
  styleUrl: './checklist-form.component.css'
})
export class ChecklistFormComponent implements OnInit{

  @Input() public actionName = 'Editar';
  @Input() public checklistItem!: ChecklistItem;
  @Output() public formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild(FormGroupDirective) checklistFormGroupDirective!: FormGroupDirective;

  public categories: Category[] = [];

  public checklistForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private snackBarService: SnackBarService, private checklistService: ChecklistService){}

  ngOnInit(): void {

    this.categoryService.getAllCategories().subscribe(
     ( resp: Category[]) => {

      this.categories = resp;
      this.createForm();
      }
    )
    
  }

  public compareCategories(categoryOne: Category, categoryTwo: Category): boolean{
    return (categoryOne != null && categoryTwo != null) &&
    (categoryOne.guid == categoryTwo.guid) && 
    (categoryOne.name == categoryTwo.name);
  }

  private createForm(){ 
    this.checklistForm = this.formBuilder.group(
      {
        completed: [this.checklistItem != null ? this.checklistItem.completed : false, Validators.required],
        description: [this.checklistItem != null ? this.checklistItem.description: '', Validators.required],
        deadline: [this.checklistItem != null ? this.checklistItem.deadline: new Date(), Validators.required],
        category: [this.checklistItem != null ? this.checklistItem.category: null, Validators.required]
      }
    )
  }

  public clearForm(){
    this.checklistForm.reset();
    this.checklistFormGroupDirective.resetForm();
  }

  public save(){

    if(this.checklistForm.valid){
      
    if(this.actionName == 'Editar'){

        var updateableItem = {
          guid: this.checklistItem.guid,
          completed: this.checklistForm.value['completed'],
          description: this.checklistForm.value['description'],
          deadline: this.checklistForm.value['deadline'],
          category: this.checklistForm.value['category']
        }

        this.checklistService.updateAllChecklistItems(updateableItem as any).subscribe(
          (resp: any) => {
              this.snackBarService.showSnackBar('Item do checklist atualizado com sucesso', 'Ok');
              this.formCloseEvent.emit(true)
          }, (resp: any) => {
              this.snackBarService.showSnackBar('Erro ao atualizar item do checklist', 'Ok');
          }
        );

      } else {

      }


        this.formCloseEvent.emit(true);
    } else {
      console.log('Invalid form')
    }
    
  }

  public cancel(){
    this.formCloseEvent.emit(false)
  }

}
