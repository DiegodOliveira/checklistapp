import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.model';
import { RouterLink } from '@angular/router';
import { ChecklistItem } from '../_models/checklist_item';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ChecklistEditComponent } from '../checklist-edit/checklist-edit.component';
import { ChecklistService } from '../services/checklist.service';


@Component({
  selector: 'app-checklist',
  imports: [MaterialModule, RouterLink ],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css'
})
export class ChecklistComponent implements OnInit {

  public dataSource: ChecklistItem[] = [];

  public displayedColumns: string[] = ['id','completed', 'description', 'deadline', 'postDate','category', 'actions'];

  constructor(private dialog: MatDialog, private checklistService: ChecklistService){}

  ngOnInit(): void{


    this.checklistService.getAllChecklistItems().subscribe(
    (resp: ChecklistItem[]) => {
      this.dataSource = resp;
    });
  

  }

  public updateCompleteStatus(status: boolean){
    console.log(`status alterado ${status}`)
  }


  public updateChecklistItem(checklistItem: ChecklistItem){
    console.log("atualizando item da checklist");

    this.dialog.open(ChecklistEditComponent, {
      disableClose: true, data: { updatableChecklistItem: checklistItem, actionName: 'Editar'},
    }).afterClosed().subscribe( resp => {
      console.log('Fechando modal de update');
      
    })
    
  }

  public deleteChecklistItem(checklistItem: ChecklistItem){
    console.log("atualizando item da checklist");
    
    this.dialog.open(DialogComponent, { disableClose: true, data: {
      msg: 'Você deseja realmente apagar esse item?', leftButtonLabel: 'Cancelar', rightButtonLabel: 'Ok'
    }}).afterClosed().subscribe(resp => {
      console.log('Janela modal confirmar apagar fechada');
      
    })

  }

  public createNewItem(){
    console.log('Criar novo item do checklist clicado');

    this.dialog.open(DialogComponent, {
      disableClose: true, data: {actionName: 'Criar'},
    }).afterClosed().subscribe( resp => {
      console.log('Fechando modal de criação');
      
    })
  }

}
