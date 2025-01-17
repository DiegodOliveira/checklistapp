import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'


@Component({
  selector: 'app-header',
  imports: [MatToolbarModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {}

  public openSideNav(){
    
  }

}
