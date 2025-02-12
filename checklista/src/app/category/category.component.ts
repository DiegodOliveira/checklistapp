import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Category } from '../_models/category';


const CATEGORY_DATA = [
  {name: 'Educação', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Saúde', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Trabalho', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Outros', guid: 'aaa-bbb-ccc-ddd'}
]

@Component({
  selector: 'app-category',
  imports: [MatCardModule, MatTableModule, MatButtonModule, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = CATEGORY_DATA;


  constructor(){}

  ngOnInit(): void {
    
  }

  public editCategory(category: Category){
    console.log('edit category clicked')
  };

  public deleteCategory(category: Category){
    console.log('delete category clicked')
  };

  public createNewCategory(){
    console.log('create new category clicked')
  }

}
