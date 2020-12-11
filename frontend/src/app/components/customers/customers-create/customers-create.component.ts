import { Component, OnInit } from '@angular/core';
import { CustomersService } from './../customers.service';
import { Customers } from './../customers.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-customers-create',
  templateUrl: './customers-create.component.html',
  styleUrls: ['./customers-create.component.css']
})
export class CustomersCreateComponent implements OnInit {

  customers: Customers = {
    name: '',
    CPF: null,
    Email: '',
    Phone: null,
    End: ''
  }

  constructor(private CustomersService: CustomersService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createCustomer(): void {
    this.CustomersService.createCustomer(this.customers).subscribe(() => {
      this.CustomersService.showMessageCustomers('Cliente Criado !')
      this.router.navigate(['/customers'])
    })
  }

  cancelCustomer(): void {
    this.router.navigate(['/customers'])
  }

}
