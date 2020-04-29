import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { categories } from './content/content';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: categories[0].id,
  },
  {
    path: ':category-id',
    component: ContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
