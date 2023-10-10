import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
// import { INavItem } from 'src/app/interfaces/app/INavItem';
import { takeUntil } from 'rxjs/operators';
// import { Role } from 'src/app/enums/roles.enum';

export class INavItem {
  title?: string;
  link?: string;
  active?: boolean;
  iconPath?: string;
  children?: INavItem[];
  isOpen?: boolean;
  canActive?: string[];
}

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss'],
})
export class SideNavBarComponent implements OnInit, OnDestroy {
  private destroy$ = new ReplaySubject(1);

  routes: INavItem[] = [
    {
      title: 'Home',
      iconPath: 'assets/svg/home.svg',
      link: '/home',
      active: true,
      // canActive:[Role.STORE, Role.HEAD_OFFICE]
    },
    {
      title: 'File Import',
      iconPath: 'assets/svg/label.svg',
      link: '/file-import',
      active: true,
      // canActive:[Role.STORE]
    },

  ];


  constructor(
    private router: Router
  ) {
    console.log( this.routes)
    this.routes = this.markSelectedMenu(this.routes);
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.routes = this.markSelectedMenu(this.routes);
      }
    });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  private markSelectedMenu(items: INavItem[]): INavItem[] {
    return items.map((i) => ({
      ...i,
      isOpen: i.children && i.children.some((item) => this.hasRouterPath(item)),
      active: this.isActive(i.link!),
      children: i.children ? this.markSelectedMenu(i.children) : [],
    }));
  }

  private hasRouterPath(config: INavItem): boolean {
    return config.link !== '/' && this.router.url.includes(config.link!);
  }

  private isActive(link: string) {
    const linkParts = link.split('/')
    return linkParts.every((part) => this.router.url.split('/')?.includes(part))
  }
}
