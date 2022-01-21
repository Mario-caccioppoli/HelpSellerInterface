import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { utility } from 'src/utility/utility';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myStorage=window.localStorage;
  

  constructor() { }

  ngOnInit(): void {

  }

  login(){
    
  }
  
}