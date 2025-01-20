import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'


@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {


  constructor() {}

  public copywrite = 'Desenvolvido por Diego';

  ngOnInit(): void{

  }

}
