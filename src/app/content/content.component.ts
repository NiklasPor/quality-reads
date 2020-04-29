import { Component, OnInit } from '@angular/core';
import { categories, resources, ResourceType } from './content';
import { Router, ActivatedRoute } from '@angular/router';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  categories = categories;
  resources$ = this.route.params.pipe(
    map((params) => params['category-id']),
    map((categoryId) =>
      resources.filter((resource) => resource.categories.includes(categoryId))
    )
  );
  resourceType = ResourceType;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
