import {Component, Input, OnInit} from '@angular/core';
import {Userdetails} from "../../userdetails";
import {UserregisterService} from "../../Services/userregister.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Details} from "../../home/details";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:Details = new Details();
  @Input() userid!: number;
  constructor(
    private userService: UserregisterService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params['id'];
  }

  register() {
    //console.log(this.user);
    this.userService.register(this.userid,this.user).subscribe(data => {
      this.router.navigateByUrl(`address/${data.id}`);
      }, error => {
        alert("Registration Failed");
      }
    );
  }
}
