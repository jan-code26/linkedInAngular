import {Component, Input, OnInit} from '@angular/core';
import {Address} from "./address";
import {AddressService} from "../../Services/address.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  address: Address = new Address();
  @Input() userid!: number;
  @Input() addressid!: number;
  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params['id'];
    this.addressid = this.route.snapshot.params['id2'];
    if(this.addressid != 0) {
      this.addressService.getAddress(this.addressid).subscribe(data => {
        console.log(data);
        this.address = data;
      });
    }
  }

  addAddress() {
    //console.log(this.address);
    //get data from service
    if(this.addressid == 0) {
      this.addressService.addAddress(this.userid, this.address).subscribe(data => {
          this.address = data;
          this.router.navigateByUrl(`welcome/${this.userid}`);
        }
      );
    }
    else {
      this.addressService.updateAddress(this.addressid, this.address).subscribe(data2 => {
            console.log(data2);
            this.router.navigateByUrl(`welcome/${this.userid}`);
          }, error => {
            alert("Address Failed");
          }
        );
    }
  }


}