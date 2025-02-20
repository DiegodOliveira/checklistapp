import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Category } from '../_models/category';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CategoryEditComponent } from '../category-edit/category-edit.component';


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


  constructor(private dialog: MatDialog){}

  ngOnInit(): void {
    
  }

  public editCategory(inputCategory: Category){
    
    this.dialog.open(CategoryEditComponent, {disableClose: true, data : {editableCategory: inputCategory}}).afterClosed().subscribe(
      resp => {
        console.log('Modal editar fechada');
      }
    )

  };

  public deleteCategory(category: Category){
    this.dialog.open(DialogComponent, {disableClose: true, data: {dialoMsg: 'Você tem certerza que gostaria de apagar a categoria?', leftButtonLabel: 'Não', rightButtonLabel: 'Sim'}}).afterClosed().subscribe(
      resp => {
        if(resp){
          console.log('Categoria apagada com sucesso');
        }else{
          console.log('Categoria não apagada');
        }
      }
    )
  };

  public createNewCategory(){
    console.log('create new category clicked')
  }

}
