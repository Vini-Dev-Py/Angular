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
  displayedColumns = ['name']

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.readRequests().subscribe(requests => {
      this.requests = requests
      console.log(requests)
    })
  }


}
