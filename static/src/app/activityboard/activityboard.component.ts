import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activityboard',
  templateUrl: './activityboard.component.html',
  styleUrls: ['./activityboard.component.css']
})
export class ActivityboardComponent implements OnInit {
  resources_list = [];
  constructor() { }

  ngOnInit() {
  }

  onResourceAdded(item){
    this.resources_list.push(item);
    console.log(this.resources_list);
  }

}
