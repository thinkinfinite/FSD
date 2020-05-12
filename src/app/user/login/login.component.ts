import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl(),
    password: new FormControl()
  });
  constructor(private router: Router,
              public userService: UserService) { }

  ngOnInit() {
  }

  async onSubmit(login: NgForm) {
    // here need some login process
    const userName = login.value && login.value.userName && login.value.userName.trim();
    const password = login.value && login.value.password && login.value.password.trim();
    const keepLogin = true;
    this.router.navigate(['/company/manage-company']);
    if (!userName || !password) {
      alert('Please enter correct user name and password!');
      return;
    }

    const status = await this.userService.login(userName, password, keepLogin);

    if (!status) {
      alert('Invalid user name or passowrd!');
      return;
    } else {
      this.router.navigate(['/company/manage-company']);
    }
  }

}
