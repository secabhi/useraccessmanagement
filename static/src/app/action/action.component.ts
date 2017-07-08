import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  action_name:string;
  constructor() {
    this.action_name = '';
   }

  ngOnInit() {
  }

  saveinput(){
console.log(this.action_name);
  }

}
