import { Component, OnInit } from '@angular/core';
import { UserService  } from "../user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token: string;
  constructor(private user$: UserService) { }

  ngOnInit() {
   this.token =  window.sessionStorage.getItem("token")
   console.log("token", this.token)
  }

}