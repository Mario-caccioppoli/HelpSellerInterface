import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/Utente';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUser: Utente=JSON.parse(localStorage.getItem("currentUser"));
  constructor() { }

  ngOnInit(): void {
    if(this.currentUser != null) {
      
    }
  }

  myStorage = window.localStorage;

}
