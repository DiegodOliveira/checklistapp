import { Component, OnInit } from '@angular/core';
import { ChecklistFormComponent } from '../checklist-form/checklist-form.component';
import { ChecklistItem } from '../_models/checklist_item';

@Component({
  selector: 'app-checklist-edit',
  imports: [ChecklistFormComponent],
  templateUrl: './checklist-edit.component.html',
  styleUrl: './checklist-edit.component.css'
})
export class ChecklistEditComponent implements OnInit{

  public actionName = 'Editar';
  public checklistItem!: ChecklistItem;
  
  constructor(){}

  ngOnInit(): void{

  }

  public onFormClose($event: any){
    
  }

}
