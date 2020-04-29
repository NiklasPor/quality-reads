import { Component, OnInit } from '@angular/core';
import { categories, resources, ResourceType } from './content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  categories = categories;
  resources = resources;
  resourceType = ResourceType;

  constructor() {}

  ngOnInit(): void {}
}
