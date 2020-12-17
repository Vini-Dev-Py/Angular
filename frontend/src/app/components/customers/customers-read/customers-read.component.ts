import { Customers } from './../customers.model';
import { CustomersService } from './../customers.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-customers-read',
  templateUrl: './customers-read.component.html',
  styleUrls: ['./customers-read.component.css']
})
export class CustomersReadComponent implements OnInit {

  customersRead: Customers[]
  displayedColumns = ['id', 'name', 'Email', 'button']

  constructor(private customersService: CustomersService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.customersService.readCustomers().subscribe(customers => {
      this.customersRead = customers
      // console.log(customers)
    })
  }

  infosFull(id: string): void {

    this.router.navigate([`/customers/infosfull/${id}`])

    // console.log(id, name, CPF, Email, Phone, End)
  }

}
