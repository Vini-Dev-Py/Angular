import { Component, OnInit } from '@angular/core';
import { RequestService } from './../request.service';
import { Requests } from './../request.model';

@Component({
  selector: 'app-requests-read',
  templateUrl: './requests-read.component.html',
  styleUrls: ['./requests-read.component.css']
})
export class RequestsReadComponent implements OnInit {

  
  requests: Requests[]
  displayedColumns = ['Pedido', 'Nome', 'email', 'CPF', 'CEP', 'Endereço', 'date', 'status', 'action']

  constructor(private requestService: RequestService) { }

   editRequest(): void {
     
   }

  ngOnInit(): void {
    this.requestService.readRequests().subscribe(requests => {
      this.requests = requests
      console.log(requests)
    })
  }


}

// {
//   "nameCustomersRequest": "",
//   "email": "",
//   "phone": "",
//   "CPF": "",
//   "date": "",
//   "price": null,
//   "numberRequest": "",
//   "CEP": "",
//   "endCustomersResquest": "",
//   "resquestItens": "",
//   "quantityItens": null,
//   "status": "",
//   "shippingMethod": ""
// }