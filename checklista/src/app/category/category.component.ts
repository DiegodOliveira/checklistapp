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
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-category',
  imports: [MatCardModule, MatTableModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = [];


  constructor(private dialog: MatDialog, private categoryService: CategoryService, private snackBarService: SnackBarService){}

  ngOnInit(): void {
    this.loadAllCategories();
  }

  private loadAllCategories(){
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
          this.loadAllCategories();
          this.snackBarService.showSnackBar('categoria editada com sucesso', 'OK');
        }
      }
    )

  };

  public deleteCategory(category: Category){
    this.dialog.open(DialogComponent, {disableClose: true, data: {dialoMsg: 'Você tem certerza que gostaria de apagar a categoria?', leftButtonLabel: 'Não', rightButtonLabel: 'Sim'}}).afterClosed().subscribe(
      resp => {
        if(resp){

          this.categoryService.deleteCategory(category.guid).subscribe(
            (resp: any) => {
              this.loadAllCategories();
              this.snackBarService.showSnackBar('Categoria apagada com sucesso', 'OK');
            }, (resp: any) => {
              this.snackBarService.showSnackBar('Não é possível apagar a categoria, pois está em uso por um item de checklist!', 'OK');
            }
          )

          
        }
      }
    )
  };

  public createNewCategory(){


    this.dialog.open(CategoryEditComponent, { disableClose: true, data: {actionName: 'Criar'} 
    }).afterClosed().subscribe(resp => {
      if(resp){
        this.loadAllCategories();
        this.snackBarService.showSnackBar('categoria editada com sucesso', 'OK');
      }
    })
  }

}
