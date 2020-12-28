import { ActivatedRoute, Route, Router } from '@angular/router';
import { CustomersService } from './../customers/customers.service';
import { Customers } from './../customers/customers.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-full-infos',
  templateUrl: './customers-full-infos.component.html',
  styleUrls: ['./customers-full-infos.component.css']
})
export class CustomersFullInfosComponent implements OnInit {

  customers: Customers

  constructor(private customersService: CustomersService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.customersService.readCustomersById(id).subscribe(customers => {
      this.customers = customers
      console.log(customers)
    });
  }

}
