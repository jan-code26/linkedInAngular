import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {User} from "../../user";
import {UsersignupService} from "../../Services/usersignup.service";
import {Userdetails} from "../../userdetails";



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User= new User();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersignupService
  ) { }

  ngOnInit(): void {
    this.user.userid = this.route.snapshot.queryParams['id'];
    // console.log(this.userid);
  }

  signup() {
    if(this.user.email==null || this.user.password==null || this.user.confirmPassword==null){
      alert("Please fill all the fields");
    }

    else if (this.user.password == this.user.confirmPassword) {
      this.userService.signup(this.user).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl(`register/${data.id}`);
        }, error => {
          alert(error.error.status==500?"User Already Exists":"User Registration Failed");
          console.log(error);
        }
      );
    } else {
      alert("Passwords do not match");
    }
  }
}