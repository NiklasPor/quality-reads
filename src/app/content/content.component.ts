import { Component, OnInit } from '@angular/core';
import { categories, resources, ResourceType } from './content';
import { Router, ActivatedRoute } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', [style({ opacity: 0 }), animate(200)]),
    ]),
  ],
})
export class ContentComponent implements OnInit {
  test = false;
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
