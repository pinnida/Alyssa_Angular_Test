import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
// import { LANG } from 'src/app/enums/lang.enum';
// import { TranslateService } from '@ngx-translate/core';
// import { LocalStorageService } from 'src/app/services/local-storage.service';
// import { AuthService } from 'src/app/services/auth.service';
// import { Role } from 'src/app/enums/roles.enum';
// import {
//   OidcClientNotification,
//   OidcSecurityService,
//   OpenIdConfiguration,
//   UserDataResult,
// } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { StoreConfigurationService } from 'src/app/services/api/store-configuration.service';
// import { Store } from 'src/app/model/responseModels/Store';
import { map, startWith } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  storeNumber: number | null = 0;
  // roles = Role;
  // role: Role = Role.IT;
  // lang = LANG;
  // langs = [
  //   {
  //     name: 'TH',
  //     value: this.lang.TH,
  //     active: true,
  //   },
  //   {
  //     name: 'EN',
  //     value: this.lang.EN,
  //     active: false,
  //   },
  // ];

  // configuration$: OpenIdConfiguration;
  // userDataChanged$: Observable<OidcClientNotification<any>>;
  // userData$: Observable<UserDataResult>;
  // isAuthenticated = false;
  // userDetails: any = {};

  // stores: Store[] = [];
  // filteredStores: Observable<Store[]>;

  searchForm = new FormGroup({
    storeNumber: new FormControl(''),
  });

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    // private translateService: TranslateService,
    // private localStorageService: LocalStorageService,
    // private authService: AuthService,
    // private oidcSecurityService: OidcSecurityService,
    private router: Router,
    // private storeConfigurationService: StoreConfigurationService
  ) {
    this.matIconRegistry.addSvgIcon(
      'notifications',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/notifications_none_black_24dp.svg'
      )
    );
  }

  ngOnInit(): void {


    //   if (!this.localStorageService.getToken()) {
    //     this.localStorageService.setToken(
    //       `{"storeNumber":${this.storeNumber},"role":"${this.role}"}`
    //     );
    //   }
    //   const json = <string>this.localStorageService.getToken();
    //   const storeInfo = JSON.parse(json);
    //   this.storeNumber = storeInfo.storeNumber || 0;
    //   this.role = storeInfo.role;
    //   this.authService.setRole(storeInfo.role);

    //   //OAuth2
    //   this.oidcSecurityService.userData$.subscribe((userData) => {
    //     console.log('userData: ', userData.userData);
    //     this.userDetails = userData.userData || {
    //       name: 'Tony Stark',
    //       given_name: 'Tony',
    //     };
    //   });

    //   const language = this.localStorageService.getLanguage();
    //   this.translateService.use(language);
    //   this.activeLanguage(language as LANG);

    //   this.getStores();
    // }

    // switchLanguage(language: LANG) {
    //   this.localStorageService.setLanguage(language);
    //   this.translateService.use(language);
    //   this.activeLanguage(language);
    //   this.reloadComponent();
    // }

    // onSave() {
    //   const store = this.searchForm.get('storeNumber')?.value;
    //   this.storeNumber = store.split(/.*\s(\d+)\s.*/)[1] || 0;
    //   this.localStorageService.setToken(
    //     `{"storeNumber":${this.storeNumber},"role":"${this.role}"}`
    //   );
    //   location.href = '/';
    // }

    // logout() {
    //   this.oidcSecurityService.logoffLocal();
    //   location.reload();
    // }

    // private reloadComponent() {
    //   const url = this.router.url;
    //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    //     this.router.navigate([`/${url}`]).then(() => {
    //       console.log(`After navigation I am on:${this.router.url}`);
    //       this.getStores();
    //     });
    //   });
    // }

    // private activeLanguage(language: LANG) {
    //   this.langs = this.langs.map((lang) => {
    //     if (lang.value === language) {
    //       return { ...lang, active: true };
    //     }
    //     return { ...lang, active: false };
    //   });
    // }

    // private async getStores() {
    //   const response = await this.storeConfigurationService.searchStore(
    //     undefined,
    //     'ASC',
    //     0,
    //     1000000,
    //     'STORE_NUMBER'
    //   );

    //   if (response?.data?.length) {
    //     this.stores = response.data.map((json) => new Store(json));
    //     this.filteredStores =
    //       this.searchForm.get('storeNumber')?.valueChanges.pipe(
    //         startWith(''),
    //         map((value) => this._filterStores(value))
    //       ) || new Observable((observer) => observer.next([]));
    //   }

    //   if ((this.storeNumber || 0) > 0) {
    //     this.translateService.get('branch').subscribe((v) => {
    //       let value = this.stores
    //         .filter((store) => store.storeNo == this.storeNumber)
    //         .map((store) => `${v} ${store.storeNo} ${store.storeName}`)[0];
    //       this.searchForm.get('storeNumber')?.patchValue(value);
    //     });
    //   }
    // }

    // private _filterStores(value: string): Store[] {
    //   const filterValue = value.toLowerCase();
    //   return this.stores.filter((option) =>
    //     `${option.storeNo} - ${option.storeName}`
    //       .toLowerCase()
    //       .includes(filterValue)
    //   );
    // }


  }

  logout(){}
}
