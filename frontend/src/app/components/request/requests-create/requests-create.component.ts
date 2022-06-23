import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requests } from '../request.model';
import { RequestService } from '../request.service';
import { faTrash, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-requests-create',
  templateUrl: './requests-create.component.html',
  styleUrls: ['./requests-create.component.scss']
})
export class RequestsCreateComponent implements OnInit {

  requests: Requests = {
    name: "",
    cpf: "",
    phone: "",
    email: "",
    value: null,
    productsIds: "",
    quantity: null,
    cep: "",
    address: "",
    complement: "",
    freight: null,
    deliveryDate: null,
    purchaseDate: null,
    status: "",
    deliveryMode: "",
    comments: "",
  }

  faTrash = faTrash
  faCalendarAlt = faCalendarAlt

  constructor(private router: Router, private requestService: RequestService) { }

  ngOnInit(): void {
  
  }

  MyInputCPF(): void {
    if (this.requests.cpf.length == 3) {
      this.requests.cpf = `${this.requests.cpf}.`
    }
    if (this.requests.cpf.length == 7) {
      this.requests.cpf = `${this.requests.cpf}.`
    }
    if (this.requests.cpf.length == 11) {
      this.requests.cpf = `${this.requests.cpf}-`
    }
  }

  LimpaCPF(): void {
    this.requests.cpf = ""

    console.log(this.requests.deliveryDate)
    console.log(this.requests.purchaseDate)
  }

  onSubmit(): void {
    this.requestService.createRequest(this.requests).subscribe(() => {
      this.requestService.showMessageProducts('Pedido criado !')
      this.router.navigate(['/requests'])
    })
  }

  cancel(): void {
    this.router.navigate(['/requests'])
  }

}
