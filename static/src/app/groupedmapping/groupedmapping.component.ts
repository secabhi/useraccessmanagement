import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-groupedmapping',
  templateUrl: './groupedmapping.component.html',
  styleUrls: ['./groupedmapping.component.css']
})
export class GroupedmappingComponent implements OnInit {
  @Input() resource_mapping = [];
  constructor() { }

  ngOnInit() {
  }
}
