import { Component, OnInit } from '@angular/core';
import {HttpService} from '../httpservice';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit{

  loginmodel:any;
  errormsg:string;
  constructor(private _httpservice:HttpService){
    this.loginmodel={};
    this.loginmodel.username = '';
    this.loginmodel.password = '';
  }

  ngOnInit(){

  }

  loginUser(){

    const request = {login_id : this.loginmodel.username, password : this.loginmodel.password};
    console.log(request);
    this._httpservice.dologin(request)
      .subscribe((res) => {
          if (res.status === 200) {

          }
        },
        (error) => this.errormsg = <any>error);
  }
}
