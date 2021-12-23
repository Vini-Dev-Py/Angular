import { Customers } from './customers.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Password } from 'src/app/models/password.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  CustomersUrl = "https://localhost:5501/api/v1/user"
  PasswordUrl = "https://localhost:5501/api/v1/password"

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

    const url = `${this.CustomersUrl}/signup`

    return this.http.post<Customers>(url, customers)
  }

  readCustomers(): Observable<Customers[]> {
    return this.http.get<Customers[]>(this.CustomersUrl)
  }
  
  readCustomersByName(name: string): Observable<Customers> {

    const url = `${this.CustomersUrl}/${name}`

    var response = this.http.get<Customers>(url)

    return response
  }

  geraSenha(): Observable<Password> {
    return this.http.get<Password>(this.PasswordUrl)
  }
}
