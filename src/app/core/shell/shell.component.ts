import { Component, OnInit } from '@angular/core';
import { AdalServices } from "app/core/shell/adal.service";
import { Observable } from "rxjs/Observable";

import {AdalService} from 'ng2-adal/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  public token:string;
  public user:adal.User;

  constructor(private adalService: AdalServices) {
    
    // this.adalService.getUser();

    var userInfo= this.adalService.getUser();

    

   }

  ngOnInit() {

    // var d= this.user;

    // console.log(this.user);



  }

  login(){
    this.adalService.login();
    
  }

  logout(){
    this.adalService.logout();
  }

  getToken(){
    this.adalService.getToken().subscribe((data:string)=> {
      console.log(data);
      return this.token=data;
    }) ;
  }

}
