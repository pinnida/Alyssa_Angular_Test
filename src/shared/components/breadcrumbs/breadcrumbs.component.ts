import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() breadcrumbs!: { name?: string, link?: any[], icon?: string }[];

  constructor() { }

  ngOnInit(): void {
  }

}
