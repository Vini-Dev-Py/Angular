import { Customers } from './customers.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  CustomersUrl = "http://127.0.0.1:8000/customers/customers/"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient,
    private router: Router) { }

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
  
  readCustomersById(id: string): Observable<Customers> {

    const url = `${this.CustomersUrl} ${id}/`

    return this.http.get<Customers>(url)
  }
}
