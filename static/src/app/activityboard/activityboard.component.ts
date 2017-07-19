import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activityboard',
  templateUrl: './activityboard.component.html',
  styleUrls: ['./activityboard.component.css']
})
export class ActivityboardComponent implements OnInit {

  //resources var
  resources_list = [];
  res_saveclicked:boolean;
  resources_name: string;
  //actions var
  actions_list=[];
  action_name:string;
  actions_saveclicked:boolean;

  // condition

  condition_text:string;

  radioval:any;
  listdata:any;
  // roles
  roles_list=[];
  role_name:string;
  roles_saveclicked:boolean;

  // global
  alldata :any;
  constructor() {
    this.res_saveclicked=false;
    this.listdata = [];
    this.radioval = ['Condition','Roles']
  }

  ngOnInit() {
  }

  onResourceAdded(item){
    this.resources_list.push(item);
    console.log(this.resources_list);
  }

  createResourcesList() {
    if( this.resources_list.length > 0) {
      if(this.resources_list.indexOf(this.resources_name) === -1) {
        this.resources_list.push(this.resources_name);
      }
      else{
        // send error message
      }
    }else{
      this.resources_list.push(this.resources_name);
    }
    console.log(this.resources_list);
    this.resources_name = '';
  }

  clearResourcesList(){
    this.resources_list = [];
  }

  save_resources(){
    this.res_saveclicked = true;
  }

  // addresources(item){
  //  this.resourceAdded.emit(item);
  // }

  // Actions code starts here

  createActionsList(){
    if( this.actions_list.length > 0) {
      if(this.actions_list.indexOf(this.action_name) === -1) {
        this.actions_list.push(this.action_name);
      }
      else{
        // send error message
      }
    }else{
      this.actions_list.push(this.action_name);
    }
    console.log(this.actions_list);
    this.action_name = '';
  }

  clearActionsList(){
    this.actions_list = [];
  }

  save_actions(){
    this.actions_saveclicked = true;
  }

  onActionsAdded(item){
    this.actions_list.push(item);
    console.log(this.actions_list);
  }

  // Roles


  // Roles code

  createRolesList(){
    if( this.roles_list.length > 0) {
      if(this.roles_list.indexOf(this.role_name) === -1) {
        this.roles_list.push(this.role_name);
      }
      else{
        // send error message
      }
    }else{
      this.roles_list.push(this.role_name);
    }
    console.log(this.roles_list);
    this.role_name = '';
  }

  clearRolesList(){
    this.roles_list = [];
  }

  save_roles(){
    this.roles_saveclicked = true;
  }

  onRolesAdded(item){
    this.roles_list.push(item);
    console.log(this.roles_list);
  }
  savealldata(){
    this.alldata = [];
    this.alldata.push({key:'actions',value:this.actions_list}) ;
    this.alldata.push({key:'roles',value:this.roles_list});
    this.alldata.push({key:'resources',value:this.resources_list});
    this.alldata.push({key:'conditions',value:[this.condition_text]});
    this.listdata.push(this.alldata);
    this.resetall();
  }
  resetall(){
    this.actions_list = [];
    this.roles_list =[];
    this.resources_list = [];
    this.condition_text = '';
    this.res_saveclicked=false;
    this.actions_saveclicked=false;
    this.roles_saveclicked=false;
  }

}
