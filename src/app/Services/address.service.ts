import { Injectable } from '@angular/core';
import {Address} from "../user/address/address";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddressService {
    private baseUrl = 'http://localhost:8080/address';
  constructor(
    private http: HttpClient
  ) { }

  addAddress(userid: number, address: Address) {
    return this.http.post<Address>(`${this.baseUrl}/add/${userid}`, address);
  }

  updateAddress(addressid: number, address: Address) {
    return this.http.put<Address>(`${this.baseUrl}/put/${addressid}`, address);
  }

  getAddress(addressid: number) {
    return this.http.get<Address>(`${this.baseUrl}/${addressid}`);
  }
}
