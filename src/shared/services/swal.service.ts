import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// sweetalert2-CommonJS
declare var require: any
const Swal = require('sweetalert2');

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor(
    // private authService: AuthService,
    private router: Router,
    private actvRoute: ActivatedRoute,
  ) { }

  public logoutSwal(swaloption: any) {
    return Swal.fire(swaloption)
      .then((result: any) => {
        if (result.value) {
          return result.value;
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          return result.dismiss;
        }
      });
  }

  public delSwal(swaloption: any) {
    return Swal.fire(swaloption)
      .then((result: any) => {
        if (result.value) {
          return result.value;
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          return result.dismiss;
        }
      });
  }

  public errorSVC(inptitle: any, inptext: any, inphtml?: any) {
    Swal.fire({
      icon: 'error',
      title: inptitle,
      text: inptext,
      html: inphtml,
      timer: 5000,
      confirmButtonColor: '#4050b5',
    })
  }

  public warningSVC(inptitle: any, inptext: any, inphtml?: any, inptimer?: any) {
    Swal.fire({
      icon: 'warning',
      title: inptitle,
      text: inptext,
      html: inphtml,
      timer: inptimer ? inptimer : 5000,
      confirmButtonColor: '#4050b5',
    })
  }

  public warningSVCTimer(inptitle: any, inptext: any, inphtml?: any) {
    Swal.fire({
      icon: 'warning',
      title: inptitle,
      text: inptext,
      html: inphtml,
      timer: 5000,
      showConfirmButton: false,
      allowOutsideClick: false,
      confirmButtonColor: '#4050b5',
    })
  }

  public successSVC(inptitle: any, inptext: any, inphtml?: any) {
    Swal.fire({
      icon: 'success',
      title: inptitle,
      text: inptext,
      html: inphtml,
      timer: 5000,
      confirmButtonColor: '#4050b5',
    })
  }

  // swal question
  public swaloption(swaloption: any) {
    return Swal.fire(swaloption)
      .then((result: any) => {
        if (result.value) {
          return result.value;
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          return result.dismiss;
        }
      });
  }

  // swal question - threebuttons
  public swaloption_threebuttons(swaloption: any) {
    return Swal.fire(swaloption)
      .then((result: any) => {
        // result = {isConfirmed: false, isDenied: true, isDismissed: false, value: false
        return result;
        // if (result.value) {
        //   return result.value;
        // } else if (result.dismiss === Swal.DismissReason.cancel) {
        //   return result.dismiss;
        // }
      });
  }

  public swalErrModelState(err: any) {
    // console.log(err)
    let inptitle = 'ผิดพลาด';
    let inptext = err.error.Message;
    let inphtml = '';
    if (err.error.ModelState) {
      Object.keys(err.error.ModelState).forEach(key => {
        console.log(key);
        inphtml = inphtml + 'โปรดระบุข้อมูล : ' + key + '<br>';
      });
    }
    Swal.fire({
      icon: 'warning',
      title: inptitle,
      text: inptext,
      html: inphtml
    })
  }

}