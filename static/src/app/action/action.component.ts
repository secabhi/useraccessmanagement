import { Component, OnInit } from '@angular/core';

import {HttpService} from '../httpservice';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  action_list: any;
  action_name: string;

  constructor(private _httpservice:HttpService) {
    this.action_list = [];
    this.action_name = '';
  }

  ngOnInit() {
  }

  saveinput() {
    console.log(this.action_name);
  }

  createActionList() {
    if( this.action_list.length > 0) {
      if(this.action_list.indexOf(this.action_name) === -1) {
        this.action_list.push(this.action_name);
      }
      else{
        // send error message
      }
    }else{
      this.action_list.push(this.action_name);
    }
    console.log(this.action_list);
    this.action_name = '';
  }

  clearActionList(){
    this.action_list = [];
  }

  saveActionList(){

  }

  addInMapping(action_item){
    
  }
}
