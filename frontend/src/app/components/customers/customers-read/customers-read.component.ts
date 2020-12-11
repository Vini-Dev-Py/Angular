import { Customers } from './../customers.model';
import { CustomersService } from './../customers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-read',
  templateUrl: './customers-read.component.html',
  styleUrls: ['./customers-read.component.css']
})
export class CustomersReadComponent implements OnInit {

  customersRead: Customers[]

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customersService.readCustomers().subscribe(customers => {
      this.customersRead = customers
      console.log(customers)
    })
  }

}
