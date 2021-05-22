import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {AddressDto, Role, UserDto} from '../model/user-model';
import {register} from 'ts-node';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  roles: Role[] = [];
  notificationOptions: string[] = ['MAIL', 'EMAIL'];
  address: AddressDto = {} as AddressDto;

  user: UserDto = {
    addressDto: this.address
  } as UserDto;

  constructor(private userService: UserService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.getRoles().subscribe((data) => {
      this.roles = data;
    }, errorMessage => {
      this.toastr.error('Cannot return roles.');
    });
  }

  register(): void{
    this.userService.register(this.user).subscribe((data) => {
      this.router.navigate(['/login']);
    }, errorMessage => {
      this.toastr.error('User already registered');
      console.log('error', errorMessage); // TODO toastrService error
    });
  }
    }
