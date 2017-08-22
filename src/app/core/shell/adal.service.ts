import { Injectable } from '@angular/core';


//import { adal, AuthenticationContext } from 'adal-angular';
// import 'expose-loader?AuthenticationContext!../../../node_modules/adal-angular/lib/adal.js'; 



// let createAuthContextFn: adal.AuthenticationContextStatic = AuthenticationContext; 

// import 'expose-loader?AuthenticationContext!../../../node_modules/adal-angular/lib/adal.js';
// let createAuthContextFn: adal.AuthenticationContextStatic = AuthenticationContext;

import {AdalService} from 'ng2-adal/core';
import { Observable } from "rxjs/Observable";



@Injectable()
export class AdalServices {


  constructor(private adalService: AdalService) { 

    var config= {
      tenant: '9a5d51f0-4e44-4531-a345-679028d89bb2', //tenantId
      clientId: '1191e564-2fa7-4d84-9c42-76bc84eedd65', //applicationId
      redirectUri: window.location.origin + '/',
      //redirectUri:'http://www.google.com' + '/',
      postLogoutRedirectUri: window.location.origin + '/'
    };

    this.adalService.init(config);

    this.adalService.handleWindowCallback();
    this.adalService.getUser();

  }

  getUser() {
    return this.adalService.userInfo;
  }

  login(){
    this.adalService.login();

    
  }

  logout(){
    this.adalService.logOut();
  }

  public getToken(): Observable<string> {
    //resourceId = 
    return this.adalService.acquireToken("1191e564-2fa7-4d84-9c42-76bc84eedd65").map(
        token => token.toString()
    );
}

}
