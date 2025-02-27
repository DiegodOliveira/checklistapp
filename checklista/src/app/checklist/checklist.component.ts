import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.model';
import { RouterLink } from '@angular/router';
import { CATEGORY_DATA } from '../category/category.component';

export const CHECKLIST_DATA = [

  { guid: 'aaa-bbb-ccc-ddd', completed: false, description: 'Ir ao oftamologista', deadline: Date.now(), postDate: Date.now(), category: CATEGORY_DATA.find(x => x.name == 'Saúde') },
  { guid: 'aaa-bbb-ccc-ddd', completed: true, description: 'Reunião com gerente regional', deadline: Date.now(), postDate: Date.now(), category: CATEGORY_DATA.find(x => x.name == 'Trabalho') }

]

@Component({
  selector: 'app-checklist',
  imports: [MaterialModule, RouterLink ],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css'
})
export class ChecklistComponent implements OnInit {

  public dataSource = CHECKLIST_DATA;

  public displayedColumns: string[] = ['id','completed', 'description', 'deadline', 'postDate','category', 'actions'];

  constructor(){}

  ngOnInit(): void{

  }

  public createNewItem(){
    console.log('Criar novo item do checklist clicado');
  }

}
