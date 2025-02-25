import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.model';
import { RouterLink } from '@angular/router';
import { CATEGORY_DATA } from '../category/category.component';

export const CHECKLIST_DATA = [

  { guid: '', completed: false, description: 'exemplo qualquer', deadline: Date.now(), postDate: Date.now(), category: CATEGORY_DATA.find(x => x.name == '') }

]

@Component({
  selector: 'app-checklist',
  imports: [MaterialModule, RouterLink ],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css'
})
export class ChecklistComponent implements OnInit {

  constructor(){}

  ngOnInit(): void{

  }

  public createNewItem(){
    console.log('Criar novo item do checklist clicado');
  }

}
