import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrls: ['./nav-list-item.component.scss']
})
export class NavListItemComponent implements OnInit {
  @Input() item: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleSubMenuClick(event: MouseEvent): void {
    event.stopPropagation();
    if (this.item!.children!.length > 0) {
      this.item!.isOpen = !this.item!.isOpen;
    } else {
      this.router.navigateByUrl(this.item!.link!);
    }
  }
}
