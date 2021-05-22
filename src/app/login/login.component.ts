import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../authorization.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(private authService: AuthorizationService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void{
    this.authService.doAuth(this.email, this.password).subscribe((data) => {
      this.router.navigate(['/product-card-view']);
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
