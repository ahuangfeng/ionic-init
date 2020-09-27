import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import { THEME } from 'src/app/services/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  // TODO: validators
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: AuthService, 
    private router: Router,
    private toastService: ToastService
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('');
    }
  }

  ngOnInit() {
  }

  public login() {
    if (!this.loginForm.pristine) {
      this.authService.login(this.loginForm.value.username,this.loginForm.value.password).then(loggedIn => {
        this.router.navigateByUrl('');
      }).catch(err => {
        this.toastService.presentToast(err.message ? err.message : 'Error login in', THEME.danger);
      })
    }
  }

  public registerModal() {

  }

  public passwordForgotten() {
    this.toastService.presentToast("Password forgotten", THEME.primary);
  }
}
