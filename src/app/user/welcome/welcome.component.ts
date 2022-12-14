import {Component, Input, OnInit} from '@angular/core';
import {Details} from "../details";
import {UserdetailsService} from "../../Services/userdetails.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Address} from "../address/address";
import {Education} from "../education/education";
import {EducationService} from "../../Services/education.service";
import {Experience} from "../experience/experience";
import {ExperienceService} from "../../Services/experience.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user:Details = new Details();
  address:Address = new Address();
  //array of education
  education: Education[] = [];
  experience:Experience[] = [];
  @Input() userid!: number;
  neweducation: boolean=false;
  newexperience: boolean=false;
  constructor(
    private userDetailsService: UserdetailsService,
    private educationService: EducationService,
    private experienceService: ExperienceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params['id'];
    this.getDetails();
  }

  getDetails() {
    this.userDetailsService.getDetails(this.userid).subscribe(data => {
        console.log(data);
        this.user= data;
        this.address = data.address;
        if(data.education.length!=0) {
          this.education = data.education;
        }
        else{
          this.neweducation=true;
        }
        if(data.experience.length!=0) {
          this.experience = data.experience;
        }
        else {
          this.newexperience = true;
        }
    }, error => {
      console.log(error);
    }
    );
  }


  edit(id: number) {
    this.router.navigateByUrl(`edit/${id}`);
  }

  editadd(id: number) {
    this.router.navigateByUrl(`address/${id}/${this.address.id}`);
  }

  addedu() {
    this.neweducation = true;
    this.router.navigateByUrl(`education/${this.userid}/0`);
  }

  deleteedu(id: number) {
    this.educationService.deleteedu(id).subscribe(data => {
        alert("Deleted");
      this.education.pop();
      this.router.navigateByUrl(`welcome/${this.userid}`);
    }
    );
  }

  addexp() {
    this.newexperience=true;
    this.router.navigateByUrl(`experience/${this.userid}/0`);
  }

  deleteexp(id: number) {
    this.experienceService.deleteexp(id).subscribe(data => {
      alert("Deleted");
      this.experience.pop();
      this.router.navigateByUrl(`welcome/${this.userid}`);
    }
    );

  }

  edidedu(id:number) {
    console.log(id);
    this.router.navigateByUrl(`education/${this.userid}/${id}`);
  }

  editexp(id: number) {
    this.router.navigateByUrl(`experience/${this.userid}/${id}`);


  }

  login() {
    this.router.navigateByUrl(`login`);
  }
}
