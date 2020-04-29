import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Day1Component } from './day1.component';

@NgModule({
  declarations: [Day1Component],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Day1Component,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class Day1Module {}
