import { LoginServiceService } from './login-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // username : string='peter@klaven';
  // password : string = 'cityslicka';
  constructor(private loginService : LoginServiceService) { }

  // ngOnInit() {debugger;
  //   this.loginService.login(this.username,this.password).subscribe(
  //     res => {
  //       console.log(res);      
  //   });
  // }
  ngOnInit() {
  }

}
