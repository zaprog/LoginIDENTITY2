import { Component } from '@angular/core';
import { UserService  } from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any = {}
  
  constructor(private user$: UserService) { }

  onSubmit(form){
    console.log(this.user, form.form._value)
   this.user$.loginUser(this.user)
  }
}