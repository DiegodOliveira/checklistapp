import { Component, OnInit, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'




@Component({
  selector: 'app-dialog',
  imports: [MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit{

  constructor(public dialogRef: MatDialogRef<DialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ){

    if(data.leftButtonLabel != null){
      this.leftButtonLabel = data.leftButtonLabel;
    }
    
    if(data.rightButtonLabel != null){
      this.rightButtonLabel = data.rightButtonLabel;
    }

    if(data.dialogMsg != null){
      this.dialogMsg = data.dialogMsg;
    }
  }

  public dialogMsg = 'Deseja continuar com esta ação?';
  public leftButtonLabel= 'Cancelar';
  public rightButtonLabel = 'Ok';

  ngOnInit(): void {
    
  }

  public clickLeftButton(){
    
  }
  
  public clickRightButton(){

  }

}
