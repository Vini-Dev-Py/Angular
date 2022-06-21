import { Component, OnInit } from '@angular/core';
import { CustomersService } from './../customers.service';
import { Customers } from './../customers.model';
import { Route, Router } from '@angular/router';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-customers-create',
  templateUrl: './customers-create.component.html',
  styleUrls: ['./customers-create.component.css']
})
export class CustomersCreateComponent implements OnInit {

  customers: Customers = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    address: "",
    cpf: "",
    phone: "",
  }

  faEye = faEye
  faEyeSlash = faEyeSlash
  tipo = "password"
  eye = faEyeSlash

  roles: Role[] = [
    {value: 'Client', viewValue: 'Cliente'},
    {value: 'Admin', viewValue: 'Administrador'},
    {value: 'Founder', viewValue: 'Fundador'}
  ]

  constructor(private CustomersService: CustomersService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  geraSenha(): void {
    this.customers.password = "";
  }

  MyInputCPF(): void {
    if (this.customers.cpf.length == 3) {
      this.customers.cpf = `${this.customers.cpf}.`
    }
    if (this.customers.cpf.length == 7) {
      this.customers.cpf = `${this.customers.cpf}.`
    }
    if (this.customers.cpf.length == 11) {
      this.customers.cpf = `${this.customers.cpf}-`
    }
  }

  PasswordToText(): void {
    this.tipo = this.tipo === "password" ? "text" : "password"
    this.eye = this.eye === faEyeSlash ? faEye : faEyeSlash
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
