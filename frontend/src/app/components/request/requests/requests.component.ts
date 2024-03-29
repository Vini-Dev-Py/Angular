import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navgateToRequestsCreate(): void {
    this.router.navigate(['/requests/create'])
  }

  navgateToRequestsFilter(): void {
    this.router.navigate(['/requests/filter'])
  }

}
