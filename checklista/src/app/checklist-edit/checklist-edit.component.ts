import { Component, Inject, OnInit } from '@angular/core';
import { ChecklistFormComponent } from '../checklist-form/checklist-form.component';
import { ChecklistItem } from '../_models/checklist_item';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-checklist-edit',
  imports: [ChecklistFormComponent],
  templateUrl: './checklist-edit.component.html',
  styleUrl: './checklist-edit.component.css'
})
export class ChecklistEditComponent implements OnInit{

  public actionName = 'Editar';
  public checklistItem!: ChecklistItem;
  
  constructor(public modalRef: MatDialogRef<ChecklistEditComponent>, @Inject( MAT_DIALOG_DATA ) public data: any){

    if(data.updatableChecklistItem != null){
      this.checklistItem = data.updatableChecklistItem;
    }
    
    if(data.checklistItem != null){
      this.checklistItem = data.actionName;
    }

  }

  ngOnInit(): void{

  }

  public onFormClose($event: any){
    this.modalRef.close($event);
  }

}
