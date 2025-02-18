import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryFormComponent } from "../category-form/category-form.component";

@Component({
  selector: 'app-category-edity',
  imports: [CategoryFormComponent],
  templateUrl: './category-edity.component.html',
  styleUrl: './category-edity.component.css'
})
export class CategoryEdityComponent implements OnInit{

  constructor(private dialogueRef: MatDialogRef<CategoryEdityComponent>, @Inject(MAT_DIALOG_DATA) dialogData: any){}

  ngOnInit(): void {
    
  }

}
