import { Customers } from './customers.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  CustomersUrl = "http://localhost:3002/customers"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessageCustomers(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  createCustomer(customers: Customers): Observable<Customers> {
    return this.http.post<Customers>(
      this.CustomersUrl,
      customers
    )
  }

  readCustomers(): Observable<Customers[]> {
    return this.http.get<Customers[]>(this.CustomersUrl)
  }

}
