import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.model';
import { RouterLink } from '@angular/router';
import { ChecklistItem } from '../_models/checklist_item';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ChecklistEditComponent } from '../checklist-edit/checklist-edit.component';
import { ChecklistService } from '../services/checklist.service';
import { SnackBarService } from '../services/snack-bar.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-checklist',
  imports: [MaterialModule, RouterLink, CommonModule ],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css'
})
export class ChecklistComponent implements OnInit {

  public dataSource: ChecklistItem[] = [];

  public displayedColumns: string[] = ['id','completed', 'description', 'deadline', 'postDate','category', 'actions'];

  constructor(private dialog: MatDialog, private checklistService: ChecklistService, private snackBarService: SnackBarService){}

  ngOnInit(): void{
    
    this.loadAllItems();

  }

  private loadAllItems(){
       this.checklistService.getAllChecklistItems().subscribe(
    (resp: ChecklistItem[]) => {
      this.dataSource = resp;
    });
  }

  public updateCompleteStatus(guid: string, status: boolean){
    
    this.checklistService.updateCompleteStatus(guid, status).subscribe(
      (resp: any) => {
        this.snackBarService.showSnackBar('Item atualizado com sucesso', 'OK')
      }, err => {
        this.snackBarService.showSnackBar('Um erro ocorreu ao atualizar o item, tente novamente', 'OK')
      }
    );

  }

  public createNewItem(){
    this.dialog.open(DialogComponent, {
      disableClose: true, data: {actionName: 'Criar'},
    }).afterClosed().subscribe( resp => {
      console.log('Fechando modal de criação');

      if(resp){
        this.loadAllItems();
      }
      
    })
  }


  public updateChecklistItem(checklistItem: ChecklistItem){
    this.dialog.open(ChecklistEditComponent, {
      disableClose: true, data: { updatableChecklistItem: checklistItem, actionName: 'Editar'},
    }).afterClosed().subscribe( resp => {
      if(resp){
        this.loadAllItems();
      }
      
    })
    
  }

  public deleteChecklistItem(checklistItem: ChecklistItem){
    console.log("atualizando item da checklist");
    
    this.dialog.open(DialogComponent, { disableClose: true, data: {
      msg: 'Você deseja realmente apagar esse item?', leftButtonLabel: 'Cancelar', rightButtonLabel: 'Ok'
    }}).afterClosed().subscribe(resp => {
      console.log('Janela modal confirmar apagar fechada');

      if(resp){

        this.checklistService.deleteChecklistItems(checklistItem.guid).subscribe(
          (resp: any) => {
            this.loadAllItems;
            this.snackBarService.showSnackBar('Item do checklist apagado com sucesso', 'OK')
          }, (err: any) => {
            this.snackBarService.showSnackBar('Um erro ocorreu ao apagar um item do checklist, tente novamente', 'OK')
          })

      }
      
    })

  }

}
