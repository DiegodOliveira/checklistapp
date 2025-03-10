import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Category } from '../_models/category';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CategoryEditComponent } from '../category-edit/category-edit.component';
import { CategoryService } from '../services/category.service';
import { SnackBarService } from '../services/snack-bar.service';


@Component({
  selector: 'app-category',
  imports: [MatCardModule, MatTableModule, MatButtonModule, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = [];


  constructor(private dialog: MatDialog, private categoryService: CategoryService, private snackBarService: SnackBarService){}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (resp: Category[]) => {
        this.dataSource = resp;
      }
    )
  }

  public editCategory(inputCategory: Category){
    
    this.dialog.open(CategoryEditComponent, {disableClose: true, data : {editableCategory: inputCategory}}).afterClosed().subscribe(
      resp => {
        if(resp){
          this.snackBarService.showSnackBar('categoria editada com sucesso', 'OK');
        }
      }
    )

  };

  public deleteCategory(category: Category){
    this.dialog.open(DialogComponent, {disableClose: true, data: {dialoMsg: 'Você tem certerza que gostaria de apagar a categoria?', leftButtonLabel: 'Não', rightButtonLabel: 'Sim'}}).afterClosed().subscribe(
      resp => {
        if(resp){
          this.snackBarService.showSnackBar('categoria apagada com sucesso', 'OK');
        }
      }
    )
  };

  public createNewCategory(){
    console.log('create new category clicked')


    this.dialog.open(CategoryEditComponent, { disableClose: true, data: {actionName: 'Criar'} 
    }).afterClosed().subscribe(resp => {
      if(resp){
        this.snackBarService.showSnackBar('categoria editada com sucesso', 'OK');
      }
    })
  }

}
