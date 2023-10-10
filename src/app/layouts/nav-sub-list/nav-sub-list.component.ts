import { Component, Input, OnInit } from '@angular/core';
// import { INavItem } from 'src/app/interfaces/app/INavItem';

export interface INavItem {
  title: string;
  link?: string;
  active: boolean;
  iconPath: string;
  children?: INavItem[];
  isOpen?: boolean;
  canActive?: string[];
}

@Component({
  selector: 'app-nav-sub-list',
  templateUrl: './nav-sub-list.component.html',
  styleUrls: ['./nav-sub-list.component.scss']
})
export class NavSubListComponent implements OnInit {

  @Input() items:INavItem[]|undefined

  constructor() { }

  ngOnInit(): void {
  }

}
