import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MaterialModule } from '../material.model';
import { ChecklistItem } from '../_models/checklist_item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checklist-form',
  imports: [MaterialModule],
  templateUrl: './checklist-form.component.html',
  styleUrl: './checklist-form.component.css'
})
export class ChecklistFormComponent implements OnInit{

  @Input() public actionName = 'Editar';
  @Input() public checklistItem!: ChecklistItem;
  @Output() public formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  public checklistForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    
    this.checklistForm = this.formBuilder.group(
      {
        completed: [this.checklistItem != null ? this.checklistItem.completed : false, Validators.required],
        description: [this.checklistItem != null ? this.checklistItem.description: '', Validators.required]
      }
    )


  }

}
