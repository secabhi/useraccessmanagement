import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {resource} from "selenium-webdriver/http";


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  @Output() resourceAdded: EventEmitter<any> = new EventEmitter();
  resources_list: any;
  resources_name: string;
  constructor() {
    this.resources_list = [];
    this.resources_name = '';

  }

  ngOnInit() {
  }

  saveinput() {
    console.log(this.resources_name);
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

  addresources(item){
   this.resourceAdded.emit(item);
  }



}
